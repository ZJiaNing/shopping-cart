import Vue from 'vue';
import VueRouter from 'vue-router'
import routes from './router/routes'
import App from './components/App'
// import store from './store'  // 这个地方的store是混合在一起的写法
// import store from './vuex'

// 注册插件，注册完之后才可以使用的
Vue.use(VueRouter);

// 引入路由
const router = new VueRouter({
  routes
});

new Vue({
  router,
  // store,
  // ES6新语法，箭头函数
  render: h => h(App)
}).$mount('#app')
