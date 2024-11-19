import { useQuery } from "@tanstack/react-query";
import { LogIn, UserRound } from "lucide-react";
import { browser } from "wxt/browser";
import { Message, sendMessage } from "~/lib/messaging";

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

const AnonymousUser = () => {
  return (
    <Button
      variant="outline"
      size="icon"
      className="rounded-full"
      onClick={() => {
        browser.tabs.create({
          url: "tabs.html#login",
        });
      }}
    >
      <LogIn className="size-4" />
    </Button>
  );
};

export const User = () => {
  const { data } = useQuery({
    queryKey: [Message.USER],
    queryFn: () => sendMessage(Message.USER, undefined),
  });

  if (!data) {
    return <AnonymousUser />;
  }

  const name = getName(data);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="rounded-full">
          <Avatar className="size-10">
            <AvatarImage src={getAvatar(data)} alt={name} />
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
            {data.email && (
              <p className="font-sans text-xs leading-none text-muted-foreground">
                {data.email}
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
            {browser.i18n.getMessage("logout")}
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
