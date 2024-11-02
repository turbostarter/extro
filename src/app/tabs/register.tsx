import { Auth } from "~/components/auth";

const RegisterTab = () => {
  return (
    <Auth.Layout
      title={chrome.i18n.getMessage("register")}
      description={chrome.i18n.getMessage("registerDescription")}
    >
      <Auth.Socials />
      <Auth.Separator />
      <Auth.Register />
    </Auth.Layout>
  );
};

export default RegisterTab;
