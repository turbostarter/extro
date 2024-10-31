import { createRoot } from "react-dom/client";

import { Main } from "~/components/common/main";
import { Layout } from "~/components/layout/layout";

const Panel = () => {
  return (
    <Layout className="p-8">
      <Main filename="app/devtools/panels/panel" />
    </Layout>
  );
};

const element = document.getElementById("root");

const root = element ? createRoot(element) : null;
root?.render(<Panel />);
