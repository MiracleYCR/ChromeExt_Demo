let contentScriptMessage;

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  // 原始页面插入的按钮
  if (request.from === 'originPageButton') {
    if (chrome.runtime.openOptionsPage) {
      chrome.runtime.openOptionsPage();
    } else {
      window.open(chrome.runtime.getURL('index.html'));
    }
  } else {
    // 导航栏的插件按钮
  }

  contentScriptMessage = {
    request,
    sender,
    sendResponse
  }
})

function getContentScriptMessage () {
  return contentScriptMessage;
}