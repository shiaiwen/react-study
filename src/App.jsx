import React, { Component } from 'react'
import Count from './containers/Count'
import store from './redux/store'

export default class App extends Component {
  render() {
    return <div>
      {/*  传递 store */}
      <Count store= { store } />
    </div>
  }
}