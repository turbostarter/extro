import React from "react";
import ReactDOM from "react-dom/client";

import { Main } from "~/components/common/main";
import { Layout } from "~/components/layout/layout";

const NewTab = () => {
  return (
    <Layout className="p-8">
      <Main filename="app/newtab" />
    </Layout>
  );
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <NewTab />
  </React.StrictMode>,
);
