import { Auth } from "~/components/auth";

const LoginTab = () => {
  return (
    <Auth.Layout
      title={chrome.i18n.getMessage("login")}
      description={chrome.i18n.getMessage("loginDescription")}
    >
      <Auth.Socials />
      <Auth.Separator />
      <Auth.Login />
    </Auth.Layout>
  );
};

export default LoginTab;
