import React, { Component } from 'react'
import store from '../../redux/store'
import { createIncrementAction,createDecrementAction,createIncrementAsyncAction } from '../../redux/count_action'
import './index.css'

export default class Count extends Component {
  state = {
    count: 0
  }
  //组件挂载完毕
  // 
  componentDidMount() { 

  }
  
  // 方法写在 state 同级
  increment = () => {
    // 获取用户要加的值
    // 1. 修改状态
    const { value } = this.selectNumber
    store.dispatch(createIncrementAction(value*1))
    // redux 中的状态更新不会触发页面的更新
  }

  decrement = () => {
    const { value } = this.selectNumber
    store.dispatch(createDecrementAction(value*1))
  }
  // 奇数的时候再加
  incrementIfOdd = () => {
    // 获取用户要加的值
    const { value } = this.selectNumber
    // 获取初始的值
    const  count  = store.getState()
    if (count % 2 !== 0) {
      store.dispatch(createIncrementAction(value*1))
    }
  }
  incrementAsync = () => {
    // 获取用户要加的值
    const { value } = this.selectNumber

      store.dispatch(createIncrementAsyncAction(value*1,500))
  }

  render() {
    const count = store.getState()
    return (
      <div>
        <h1>当前求和为：{count}</h1>
        <select ref={c => (this.selectNumber = c)}>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
        </select>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.incrementIfOdd}>当前求和为奇数的时候在加</button>
        <button onClick={this.incrementAsync}>异步加</button>
      </div>
    )
  }
}
