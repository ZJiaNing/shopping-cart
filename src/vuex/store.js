// 创建store的地方
import Vue from 'vue'
import Vuex from 'vuex'

// 导入各个模块的初始状态和mutations
// 这边的话，我是将cart和product的“东西”放在一起了
import index from './modules/index'

Vue.use(Vuex);

// 一个应用应当只有一个Store对象
// 至于不同的模块，如果应用复杂的话，应当创建module，初始化不同的state以及各自的actions和mutations
export default new Vuex.Store({
  modules: {
    index
  }
})
