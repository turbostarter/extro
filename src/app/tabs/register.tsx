import { Auth } from "~/components/auth";

const RegisterTab = () => {
  return (
    <Auth.Layout
      title="Register"
      description="Enter your details below to create your account"
    >
      <Auth.Socials />
      <Auth.Separator />
      <Auth.Register />
    </Auth.Layout>
  );
};

export default RegisterTab;
