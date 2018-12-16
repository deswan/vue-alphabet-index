import "@babel/polyfill"
import Vue from 'vue'
import App from './App.vue'
import VueAlphabetIndex from '../src/index';
Vue.component('alphabet-index', VueAlphabetIndex)

new Vue({
  el: '#app',
  render: h => h(App)
})
