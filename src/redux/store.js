/**
 * 专门用于暴露一个 store 对象，整个应用只有一个 store 对象 
 */
// 引入 createStore  用于创建 store 对象

import { createStore,applyMiddleware } from 'redux'
import reducers from './reducers'

import { composeWithDevTools }  from 'redux-devtools-extension'
// 异步 action

import thunk from 'redux-thunk'
// 汇总 reducer 

// 默认暴露  
// applyMiddleware(thunk)
export default createStore(reducers,composeWithDevTools(applyMiddleware(thunk)))