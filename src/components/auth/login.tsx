import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { browser } from "wxt/browser";
import { z } from "zod";
import { Button } from "~/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { supabase } from "~/lib/supabase";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

type LoginData = z.infer<typeof loginSchema>;

export const Login = () => {
  const { mutate, isPending } = useMutation({
    mutationFn: (data: LoginData) => supabase.auth.signInWithPassword(data),
    onError: (error) => toast.error(error.message),
    onSuccess: () =>
      browser.tabs.update({
        url: "options.html",
      }),
  });

  const form = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginData) => {
    mutate(data);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{browser.i18n.getMessage("email")}</FormLabel>
              <FormControl>
                <Input placeholder="email@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{browser.i18n.getMessage("password")}</FormLabel>
              <FormControl>
                <Input type="password" placeholder="••••••••" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full mt-2" disabled={isPending}>
          {isPending ? (
            <Loader2 className="size-4 animate-spin" />
          ) : (
            browser.i18n.getMessage("login")
          )}
        </Button>
      </form>

      <div className="mt-4 text-center text-sm">
        {browser.i18n.getMessage("dontHaveAccount")}{" "}
        <a href="tabs.html#register" className="underline hover:no-underline">
          {browser.i18n.getMessage("register")}
        </a>
      </div>
    </Form>
  );
};
