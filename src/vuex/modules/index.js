import * as types from '../mutation-types'
// import * as actions from '../actions'


// Mocking data
// 现在我把product和cart两个模块的东西放在一起处理吧，，先放一起吧，之后再说好了

const state = {
  iPhone6s: {
    name: 'Apple/苹果 iPhone 6S',
    desc: '3D Touch、1200万像素照片、4k视频，强大功能于一身。',
    priceRange: '5288 - 6888',
    price: '5288',
    activeStyle: "银色",
    activeStorage: '16GB',
    isSelected: true,   // 这个是用来做什么的？
    style: {
      '银色': 'http://o8yu724qs.bkt.clouddn.com/iphone6s-silver-select-2015.png',
      '深空灰色': 'http://o8yu724qs.bkt.clouddn.com/iphone6s-gray-select-2015.png',
      '金色': 'http://o8yu724qs.bkt.clouddn.com/iphone6s-gold-select-2015.png',
      '玫瑰金色': 'http://o8yu724qs.bkt.clouddn.com/iphone6s-rosegold-select-2015.png'
    },
    storage: {
      '16GB': 5288,
      '64GB': 6088,
      '128GB': 6888
    }
  },           // 产品数据信息对象
  cart: []    // 购物车中的数据对象
  // productCount: 0     // 首先简单一点，先进行数量的统计
}

// 现在的products的数据是直接伪造的，所以直接用getters返回就好了，，至于请求的话，再说吧，，
// 为什么这边的访问不用加state.index.iPhone6s呢 ？？
const getters = {
  allProducts: state => state.iPhone6s,
  getCount: state => state.productCount,
  getCart: state => state.cart
}

// 那么action连这边的样式和价格切换都需要改变的话，是不是意味所以的交互都需要存储进去呢？
// 当然不是啦，，，本地组件，如果不涉及到“大范围内”的影响的话，就不需要放到store中去，而是放在组件内部即可了
// 这个需要进行参数的传递
const actions = {
  // increment: ({commit, amount}) => commit('increment', amount),
  addItem({commit}) {
    // addItem的时候需要将数据添加到cart中去
    commit('ADD_ITEM');
  },
  // removeItem: ({commit}) => commit('REMOVE_ITEM'),
  removeItem({commit}, params) {
    commit('REMOVE_ITEM', params);
  },
  // changeStyle: ({commit}) => commit('CHANGE_STYLE'),
  changeStyle({commit}, params) {     // ...arg ：动态传递n个参数， 但是这边的第二个参数会变为undefined的，所以还是将需要传递的参数变成一个obj为妥
    commit('CHANGE_STYLE', params);
  },
  changePrice({commit}, params) {
    commit('CHANGE_PRICE', params);
  }
  // changePrice: ({commit}) => commit('CHANGE_PRICE')
}

const mutations = {
  [types.ADD_ITEM](state) {
    // 这边需要将当前添加的信息存储到cart里面去，这样就可以在Cart.vue页面中进行访问了
    let type = state.iPhone6s.activeStyle + ', ' + state.iPhone6s.activeStorage;
    let price = state.iPhone6s.price;
    let proInfo = {
      type: type,
      count: 1,
      price: state.iPhone6s.price
    }

    state.cart.push(proInfo);
  },
  [types.REMOVE_ITEM](state, params) {
    let index = state.cart.indexOf(params);

    // $remove已经被废除了，使用这个splice
    state.cart.splice(index, 1);
  },
  [types.CHANGE_PRICE](state, params) {
    state.iPhone6s.activeStorage = params.storage;
    state.iPhone6s.price = params.price;
  },
  [types.CHANGE_STYLE](state, params){
    state.iPhone6s.activeStyle = params.activeStyle;
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
