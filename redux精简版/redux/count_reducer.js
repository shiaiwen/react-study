// 该文件用于创建一个为Count组件服务的 reducer,reducer 的呢么之就是一个函数
// reducer函数会接到两个参数,分别为之前的状态preState,动作对象 action
// Reducer
// 形参的默认值
export default function countReducer(preState=0  , action) {
  // 从 action 对象中获取 type,data
  // console.log(preState)
  const { type, data } = action
  // if (type === 'increment') {
  //   return preState + data
  // } else if (type === 'decrement') {
  //     return preState - data
  // }
  // 根据 type 的值判断如何加工数据
  switch (type) {
    case 'increment':    
      return preState + data
    case 'decrement':
      return preState - data
    default:
      return preState
  }
}
