import { ADD_PERSON } from '../constant'
const ininState = [
  {
    id: '1',
    name: 'tom',
    age: 18
  }
]
export default function personReducer (preState = ininState, action) {
  const { type, data } = action
  // 纯函数：只要有相同的输入，必定得到同样的输出
  // 不得改写参数的数据
  // 不能产生任何副作用
  // 不能调用 Date.now() 和 Math.random()等不纯的方法
  // reduces 必须是一个纯函数
  switch (type) {
    case ADD_PERSON:
      return [data, ...preState]
    default:
      return preState
  }
}
