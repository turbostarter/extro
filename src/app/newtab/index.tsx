import { Main } from "~/components/common/main";
import { Layout } from "~/components/layout/layout";
import "~/styles/globals.css";

const NewTab = () => {
  return (
    <Layout className="p-8">
      <Main filename="app/newtab" />
    </Layout>
  );
};

export default NewTab;
