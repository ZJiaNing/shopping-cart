// 先准备全部写在一份文件里试试看，
// 加入购物车实际上是一个加的动作，，，
import Vue from 'vue'
import Vuex from 'vuex'
// import * as getters from './getters'

Vue.use(Vuex)


// 数据容器
const state = {
  count: 0
}

// 接受actions的信号，开始处理，处理完毕之后更新视图
// @paylaod: 载荷，即传入额外的参数
const mutations = {
  increment(state, payload) {
    state.count++;
    console.log(payload);
  },
  decrement(state) {
    state.count--;
    console.log('derease something');
  }
}

// 进行“事件的分发”的, 触发状态的变更
const actions = {
  // increment: ({commit, amount}) => commit('increment', amount),
  increment({commit}, amount) {
    commit('increment', amount);
  },
  decrement: ({commit}) => commit('decrement')
}

// 这个可以理解成store的计算属性
const getters = {

}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
