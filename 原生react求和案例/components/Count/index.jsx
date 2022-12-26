import React, { Component } from 'react'
import './index.css'

export default class Count extends Component {
  state = {
    count: 0
  }
  // 方法写在 state 同级
  increment = () => {
    // 获取用户要加的值
    const { value } = this.selectNumber
    // 获取初始的值
    const { count } = this.state

    console.log(value)
    console.log(count)

    this.setState({
      count: count + Number(value)
    })
  }

  decrement = () => {
    // 获取用户要加的值
    const { value } = this.selectNumber
    // 获取初始的值
    const { count } = this.state

    console.log(value)
    console.log(count)

    this.setState({
      count: count - Number(value)
    })
  }
  // 奇数的时候再加
  incrementIfOdd = () => {
    // 获取用户要加的值
    const { value } = this.selectNumber
    // 获取初始的值
    const { count } = this.state
    if (count % 2 !== 0) {
      this.setState({
        count: count + Number(value)
      })
    }
  }
  incrementAsync = () => {
    // 获取用户要加的值
    const { value } = this.selectNumber
    // 获取初始的值
    const { count } = this.state
    setTimeout(() => {
      this.setState({
        count: count + Number(value)
      })
    }, 500)
  }

  render() {
    const { count } = this.state
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
