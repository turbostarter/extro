import { browser } from "wxt/browser";
import { Auth } from "~/components/auth";

export const Login = () => {
  return (
    <Auth.Layout
      title={browser.i18n.getMessage("login")}
      description={browser.i18n.getMessage("loginDescription")}
    >
      <Auth.Socials />
      <Auth.Separator />
      <Auth.Login />
    </Auth.Layout>
  );
};
