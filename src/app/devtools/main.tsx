import React from "react";
import ReactDOM from "react-dom/client";
import { browser } from "wxt/browser";

import { Main } from "~/components/common/main";
import { Layout } from "~/components/layout/layout";

browser.devtools.panels.create(
  browser.i18n.getMessage("extensionName"),
  "icons/128.png",
  "popup.html",
);

browser.devtools.panels.elements
  .createSidebarPane(browser.i18n.getMessage("extensionName"))
  .then((sidebar) => {
    sidebar.setPage("<p>siema</p>");
  });

console.log("siema");

const DevTools = () => {
  return (
    <Layout className="p-8">
      <Main filename="app/devtools" />
    </Layout>
  );
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <DevTools />
  </React.StrictMode>,
);
