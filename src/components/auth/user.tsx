import { sendToBackground } from "@plasmohq/messaging";
import { useQuery } from "@tanstack/react-query";
import { LogIn, UserRound } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Button } from "~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { supabase } from "~/lib/supabase";
import { getAvatar, getName } from "~/lib/utils";
import type { User as UserType } from "~/types";

const AnonymousUser = () => {
  return (
    <Button
      variant="outline"
      size="icon"
      className="rounded-full"
      onClick={() => {
        chrome.tabs.create({
          url: "./tabs/login.html",
        });
      }}
    >
      <LogIn className="size-4" />
    </Button>
  );
};

export const User = () => {
  const { data } = useQuery({
    queryKey: ["user"],
    queryFn: () =>
      sendToBackground<
        undefined,
        {
          user: UserType | null;
        }
      >({
        name: "user",
      }),
  });

  const user = data?.user;

  if (!user) {
    return <AnonymousUser />;
  }

  const name = getName(user);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="rounded-full">
          <Avatar className="size-10">
            <AvatarImage src={getAvatar(user)} alt={name} />
            <AvatarFallback>
              <UserRound className="size-5" />
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end">
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-2">
            {name && (
              <p className="font-sans text-sm font-medium leading-none">
                {name}
              </p>
            )}
            {user.email && (
              <p className="font-sans text-xs leading-none text-muted-foreground">
                {user.email}
              </p>
            )}
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuItem className="cursor-pointer" asChild>
          <button
            type="button"
            className="w-full"
            onClick={() => supabase.auth.signOut()}
          >
            Logout
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
