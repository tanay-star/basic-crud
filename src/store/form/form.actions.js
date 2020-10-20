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

export const editPost = (data) => {
  return {
    type: formActionTypes.EDIT_POST,
    payload: data,
  }
}

export const update = (data) => {
  return {
    type: formActionTypes.UPDATE,
    payload: data,
  }
}
