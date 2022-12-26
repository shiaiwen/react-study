import React, { Component } from 'react'
import './index.css'
import { connect } from 'react-redux'
// 创建并暴露一个 Count 的容器组件
// a 函数的返回值作为状态 传递 给UI 组件
// 其中 n 为 props 的key value为组件的值
import {
  createIncrementAction,
  createDecrementAction,
  createIncrementAsyncAction
} from '../../redux/count_action'
class Count extends Component {
  // 方法写在 state 同级
  increment = () => {
    // 获取用户要加的值
    // 1. 修改状态
    const { value } = this.selectNumber
    this.props.increse(value * 1)
  }

  decrement = () => {
    const { value } = this.selectNumber
    this.props.decrese(value * 1)
  }
  // 奇数的时候再加
  incrementIfOdd = () => {
    // 获取用户要加的值
    const { value } = this.selectNumber
    const { count } = this.props
    // 获取初始的值
    if (count % 2 !== 0) {
      this.props.increse(value * 1)
    }
  }
  incrementAsync = () => {
    // 获取用户要加的值
    const { value } = this.selectNumber
    this.props.increseAsync(value * 1, 500)
  }

  render() {
    console.log('UI组件接收到的props是', this.props)
    const { count } = this.props
    return (
      <div>
        <h1>当前求和为: {count}</h1>
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




export default connect(state => ({ count: state }), {
  increse: createIncrementAction,
  decrese: createDecrementAction,
  increseAsync: createIncrementAsyncAction
})(Count)
