/**
 * 专门用于暴露一个 store 对象，整个应用只有一个 store 对象 
 */
// 引入 createStore  用于创建 store 对象

import { createStore,applyMiddleware } from 'redux'
import countReducer from './count_reducer'
// 异步 action

import thunk from 'redux-thunk'

// 默认暴露
export default createStore(countReducer,applyMiddleware(thunk))