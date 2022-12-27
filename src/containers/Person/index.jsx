import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import { connect } from 'react-redux'
import { addPerson } from '../../redux/actions/person'
class Person extends Component {
  addPerson = () => {
    const name = this.name.value
    const age = this.age.value * 1
    const personObj = {
      name,
      age,
      id: nanoid()
    }
    this.props.addPerson(personObj)
    this.name.value = ''
    this.age.value = ''

  }
  render() {
    const { count } = this.props
    return (
      <div>
        <h1>我是Person组件,上方组件的求和为 { count } </h1>
        <input type='text' placeholder='输入姓名' ref={c => (this.name = c)} />
        <input type='text' placeholder='输入年龄' ref={c => (this.age = c)} />
        <button onClick={this.addPerson}>添加</button>

        <ul>
          {
            this.props.persons.map(p => {
              return <li key={p.id}>姓名：{p.name}----年龄：{ p.age }</li>
          })
          }
        </ul>
      </div>
    )
  }
}
export default connect(
  state => ({
    persons: state.persons,
    count: state.count
  }),
  {addPerson}
)(Person)
