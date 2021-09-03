function injectStyleCSS () {
  const styleTag = document.createElement('style'); 
  styleTag.innerHTML= `
    .chromeExt_button_wrapper {
      position: absolute;
      width: 300px;
      height: 77px;
      top: 146px;
      right: 160px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      background: #F4F4EC;
    }
    .chromeExt_button {
      border: none;
      height: 40px;
      color: #ffffff;
      cursor: pointer;
      font-size: 15px;
      padding: 0 10px;
      background: #0d8794;
    }
    .chromeExt_button:hover {
      background: #2fa6b0;
    }
  `;
  document.getElementsByTagName('head').item(0).appendChild(styleTag);
}

function injectChromeExtButton () {
  const button = document.createElement('button');
  const buttonWrapper = document.createElement('div');
  const bodyDom = document.getElementsByTagName('body')[0];

  button.innerText = 'Chrome 插件';
  button.className = 'chromeExt_button';
  button.onclick = function () {
    chrome.runtime.sendMessage({
      from: 'originPageButton'
    }, (response) => {})
  }

  buttonWrapper.className = 'chromeExt_button_wrapper';

  buttonWrapper.appendChild(button);
  bodyDom.appendChild(buttonWrapper);
}


window.addEventListener('DOMContentLoaded', () => {
  console.log(`%c Chrome Extension %c v.1.0.0`, "color: green; font-size: 15px;", "color: red; font-size: 10px");

  injectStyleCSS();
  injectChromeExtButton();
});