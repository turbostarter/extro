import { Auth } from "~/components/auth";

const LoginTab = () => {
  return (
    <Auth.Layout
      title="Login"
      description="Enter your email below to login to your account"
    >
      <Auth.Socials />
      <Auth.Separator />
      <Auth.Login />
    </Auth.Layout>
  );
};

export default LoginTab;
