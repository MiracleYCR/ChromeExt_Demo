import { reactive  } from 'vue'

export default {
  state: reactive({
    movieName: ''
  }),

  getBackground () {
    return chrome.extension.getBackgroundPage();
  }
}