import React from "react";
import ReactDOM from "react-dom/client";

import { Main } from "~/components/common/main";
import { Layout } from "~/components/layout/layout";

const Options = () => {
  return (
    <Layout className="p-8">
      <Main filename="app/options" />
    </Layout>
  );
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Options />
  </React.StrictMode>,
);
