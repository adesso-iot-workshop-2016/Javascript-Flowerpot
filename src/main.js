import Vue from 'vue'
import App from './App.vue'

Vue.use(require('vue-resource'))
Vue.http.headers.common['Authorization'] = "Bearer LqN9iRoCxgQLHAHlV.XEXK2KrdCwKYjI"

/* eslint-disable no-new */
vue = new Vue({
  el: 'body',
  components: { App }
})


