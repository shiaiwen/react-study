/**
 * 该文件专门为 count 组件生成 action 对象
 */


import { ADD_PERSON } from '../constant'
export const addPerson = personObj => ({ type: ADD_PERSON, data:personObj })



