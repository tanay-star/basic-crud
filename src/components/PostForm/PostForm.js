import React from 'react'
import './PostForm.styles.css'
//connecting to redux
import { connect } from 'react-redux'
//importing actions
import { createPost } from '../../store/form/form.actions'

class PostForm extends React.Component {
  constructor() {
    super()
    this.state = {
      title: '',
      body: '',
    }
  }

  handleChange = (e) => {
    const { value, name } = e.target //destructuring
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
    let data = { ...this.state, id: new Date() }
    this.props.createPost(data)
    this.setState({ title: '', body: '' })
  }

  render() {
    return (
      <div className="post-container">
        <h1 className="post_heading">Create Post</h1>
        <form className="form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Enter the post title"
            required
            onChange={this.handleChange}
            name="title"
            value={this.state.title}
          />
          <br />
          <br />
          <textarea
            rows="5"
            cols="28"
            placeholder="Enter Post"
            required
            onChange={this.handleChange}
            name="body"
            value={this.state.body}
          />
          <br />
          <br />
          <button>Post</button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createPost: (data) => dispatch(createPost(data)),
  }
}

export default connect(null, mapDispatchToProps)(PostForm)
