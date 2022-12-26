// 引入 CountUI 组件
import CountUI from '../../components/Count'
// 引入 store
// 引入 connect 用于连接 UI 组件与 redux
import { connect } from 'react-redux'
// 创建并暴露一个 Count 的容器组件
// a 函数的返回值作为状态 传递 给UI 组件
// 其中 n 为 props 的key value为组件的值
import {
  createIncrementAction,
  createDecrementAction,
  createIncrementAsyncAction
} from '../../redux/count_action'
// const mapStateToProps = state => ({ count: state })
// const mapDispatchToProps = dispatch => ({
//   increse: data => dispatch(createIncrementAction(data)),
//   decrese: data => dispatch(createDecrementAction(data)),
//   increseAsync: (data, time) => dispatch(createIncrementAsyncAction(data, time))
// })

// dispatch => ({
//   increse: data => dispatch(createIncrementAction(data)),
//   decrese: data => dispatch(createDecrementAction(data)),
//   increseAsync: (data, time) => dispatch(createIncrementAsyncAction(data, time))
// })

export default connect(
  state => ({ count: state }),
  {
    increse: createIncrementAction,
    decrese: createDecrementAction,
    increseAsync: createIncrementAsyncAction
  }
)(CountUI)
