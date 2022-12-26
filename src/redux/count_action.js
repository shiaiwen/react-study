/**
 * 该文件专门为 count 组件生成 action 对象
 */
// 函数 return 一个对象

import { INCREMENT, DECREMENT } from './constant'
export const createIncrementAction = data => ({ type: INCREMENT, data })
export const createDecrementAction = data => ({ type: DECREMENT, data })
export const createIncrementAsyncAction = (data,time) => {
	return (dispatch)=>{
		setTimeout(()=>{
			dispatch(createIncrementAction(data))
		},time)
	}
}


