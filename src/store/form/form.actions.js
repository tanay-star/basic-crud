import { formActionTypes } from './form.actiontypes'

export const createPost = (data) => {
  return {
    type: formActionTypes.ADD_POST,
    payload: data,
  }
}

export const deletePost = (data) => {
  return {
    type: formActionTypes.DELETE_POST,
    payload: data,
  }
}
