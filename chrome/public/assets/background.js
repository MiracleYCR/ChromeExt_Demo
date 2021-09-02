let contentScriptMessage;

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  contentScriptMessage = {
    request,
    sender,
    sendResponse
  }
})

function getContentScriptMessage () {
  return contentScriptMessage;
}