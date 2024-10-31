const ContentScriptUI = () => {
  return (
    <button type="button" onClick={() => alert("This is injected UI!")}>
      {chrome.i18n.getMessage("contentScriptUI")}
    </button>
  );
};

export default ContentScriptUI;
