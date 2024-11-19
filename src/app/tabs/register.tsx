import { browser } from "wxt/browser";
import { Auth } from "~/components/auth";

export const Register = () => {
  return (
    <Auth.Layout
      title={browser.i18n.getMessage("register")}
      description={browser.i18n.getMessage("registerDescription")}
    >
      <Auth.Socials />
      <Auth.Separator />
      <Auth.Register />
    </Auth.Layout>
  );
};
