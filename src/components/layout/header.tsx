import { User } from "~/components/auth/user";
import { ThemeSwitch } from "~/components/common/theme";

export const Header = () => {
  return (
    <header className="flex items-center justify-center gap-2">
      <ThemeSwitch />
      <User />
    </header>
  );
};
