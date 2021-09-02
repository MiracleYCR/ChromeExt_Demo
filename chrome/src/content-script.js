window.addEventListener('DOMContentLoaded', () => {
  console.log(`%c Chrome Extension %c v.1.0.0`, "color: green; font-size: 15px;", "color: red; font-size: 10px");

  chrome.runtime.sendMessage({ greeting: 'hello' }, (response) => {
    console.log(response)
  })
});