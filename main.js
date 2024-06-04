import App from './App'
import uviewPlus from 'uview-plus'
// #ifndef VUE3
import Vue from 'vue'
// main.js
import uView from "uview-ui";

Vue.use(uView);
import './uni.promisify.adaptor'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
  ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import {
  createSSRApp
} from 'vue'

export function createApp() {
  const app = createSSRApp(App)
  app.use(uviewPlus)
  return {
    app
  }
}
// #endif