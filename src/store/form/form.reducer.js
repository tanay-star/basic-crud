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
    case formActionTypes.EDIT_POST:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post.id === action.payload
            ? { ...post, editing: !post.editing }
            : post,
        ),
      }
    case formActionTypes.UPDATE:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post.id === action.payload.id
            ? {
                ...post,
                title: action.payload.title,
                body: action.payload.body,
                editing: !action.payload.editing,
              }
            : post,
        ),
      }

    default:
      return state
  }
}

export default formReducer
