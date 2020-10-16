import { formActionTypes } from './form.actiontypes'

const initial_state = {
  posts: [],
}

const formReducer = (state = initial_state, action) => {
  switch (action.type) {
    case formActionTypes.ADD_POST:
      return {
        ...state,
        posts: state.posts.concat(action.payload),
      }
    case formActionTypes.DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.payload),
      }

    default:
      return state
  }
}

export default formReducer
