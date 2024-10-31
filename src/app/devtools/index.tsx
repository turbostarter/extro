import sidebarHTML from "url:./panels/sidebar/index.html";

import { Main } from "~/components/common/main";
import { Layout } from "~/components/layout/layout";

import panelIcon from "url:../../../assets/icon.png";

import panelHTML from "./panels/panel/index.html";

chrome.devtools.panels.create(
  chrome.i18n.getMessage("extensionName"),
  panelIcon,
  // See: https://github.com/PlasmoHQ/plasmo/issues/106#issuecomment-1188539625
  panelHTML.substring(panelHTML.lastIndexOf("/") + 1),
);

chrome.devtools.panels.elements.createSidebarPane(
  chrome.i18n.getMessage("extensionName"),
  (sidebar) => {
    sidebar.setPage(sidebarHTML.substring(sidebarHTML.lastIndexOf("/") + 1));
  },
);

const Devtools = () => {
  return (
    <Layout className="p-8">
      <Main filename="app/devtools" />
    </Layout>
  );
};

export default Devtools;
