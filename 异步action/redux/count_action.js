/**
 * 该文件专门为 count 组件生成 action 对象
 */
// 函数 return 一个对象

import { INCREMENT, DECREMENT } from './constant'
export const createIncrementAction = data => ({ type: INCREMENT, data })
export const createDecrementAction = data => ({ type: DECREMENT, data })
export const createIncrementAsyncAction = (data, time) => {
  // 异步的返回一个函数 action 的 值为函数
  return () => {
    // 因为只有函数可以开启异步的任务
    setTimeout((dispatch) => {
      // 通知 redux 
      dispatch(createIncrementAction(data))
    }, time)
  }
}
