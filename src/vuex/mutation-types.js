
//使用常量替代mutation事件类型，并放在单独的
//文件中(也就是这里)，可以使用一些方便的工具
//并且让代码的合作者对整个app包含的mutation
//能够一目了然


// 所以，在这个文件中整理了mutation的所有type
// 然后在其他文件中使用：
// import * as types from 'mutation-types'
// 来把下列这些mutation的事件类型(type)导入
// 到一个types对象中，供其他地方使用。

export const CHANGE_PRICE = 'CHANGE_PRICE'  // 价格切换
export const CHANGE_STYLE = 'CHANGE_STYLE'  // 颜色切换
export const ADD_ITEM = 'ADD_ITEM'          // 产品添加
export const REMOVE_ITEM = 'REMOVE_ITEM'    // 产品移除
