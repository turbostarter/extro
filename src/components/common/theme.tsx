"use client";

import { useStorage } from "@plasmohq/storage/hook";
import { Moon, Sun } from "lucide-react";
import { memo } from "react";

import { Button } from "~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { STORAGE_KEY } from "~/lib/storage";
import { cn } from "~/lib/utils";
import { Theme } from "~/types";

type ThemeSwitchProps = {
  readonly className?: string;
};

export const ThemeSwitch = memo<ThemeSwitchProps>(({ className }) => {
  const [_, setTheme] = useStorage<Theme>(STORAGE_KEY.THEME);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className={cn("rounded-full", className)}
        >
          <Sun className="size-5 scale-100 dark:scale-0" />
          <Moon className="absolute size-5 scale-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {Object.values(Theme).map((theme) => (
          <DropdownMenuItem
            key={theme}
            onClick={() => setTheme(theme)}
            className="capitalize"
          >
            {theme}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
});

ThemeSwitch.displayName = "ThemeSwitch";
