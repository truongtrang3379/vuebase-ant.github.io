import 'babel-polyfill'

import Vue from 'vue'
import App from './App.vue'

// ================
//  Css and components ant design
// ----------------
import './style/styleGlobal.less'
import Antd from 'ant-design-vue';

// ================
// Vue-stash aka simple vuex alternative
// ----------------
import VueStash from 'vue-stash'
import store from './store'

// ================
// Vue router
// ----------------
import router from './router'
Vue.use(VueStash)

// ================
// Vue highlightjs
// ----------------
import VueHighlightJS from 'vue-highlightjs'

// ================
// Vue i18n
// ----------------
import i18n from './i18n'

// ================
// Component
// ----------------
import VSpacer from '@/components/Spacer/Spacer.vue'
Vue.component('v-spacer', VSpacer)

Vue.use(VueHighlightJS)

Vue.config.productionTip = false

Vue.use(Antd);

new Vue({
  data: { store },
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
