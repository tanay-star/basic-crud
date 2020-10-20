import React from 'react'
import './post.styles.css'
//connecting to redux
import { connect } from 'react-redux'
//importing actions
import { deletePost } from '../../store/form/form.actions'
import { editPost } from '../../store/form/form.actions'

const Post = ({ title, body, id, deletePost, editPost }) => {
  return (
    <div className="post">
      <h2 className="post_title">{title}</h2>
      <p className="post_message">{body}</p>
      <div className="control-buttons">
        <button className="edit" onClick={() => editPost(id)}>
          Edit
        </button>
        <button onClick={() => deletePost(id)} className="delete">
          Delete
        </button>
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (data) => dispatch(deletePost(data)),
    editPost: (data) => dispatch(editPost(data)),
  }
}

export default connect(null, mapDispatchToProps)(Post)
