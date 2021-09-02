window.addEventListener('DOMContentLoaded', () => {
  console.log(`%c Chrome Extension %c v.1.0.0`, "color: green; font-size: 15px;", "color: red; font-size: 10px");

  console.log(chrome)

  chrome.runtime.sendMessage({ greeting: 'Hello Chrome Extension' }, (response) => {
    console.log(response)
  })

});