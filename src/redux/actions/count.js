/**
 * 该文件专门为 count 组件生成 action 对象
 */
// 函数 return 一个对象

import { INCREMENT, DECREMENT } from '../constant'
export const increment = data => ({ type: INCREMENT, data })
export const decrement = data => ({ type: DECREMENT, data })
export const incrementAsync = (data,time) => {
	return (dispatch)=>{
		setTimeout(()=>{
			dispatch(increment(data))
		},time)
	}
}


