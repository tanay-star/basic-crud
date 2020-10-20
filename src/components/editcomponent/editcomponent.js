import React from 'react'
import './editcomponent.styles.css'
//connecting to redux
import { connect } from 'react-redux'
//importing actions
import { update } from '../../store/form/form.actions'

class EditComponent extends React.Component {
  constructor(props) {
    super(props)
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
    let data = { ...this.state, id: this.props.id, editing: this.props.editing }
    this.props.update(data)
    this.setState({ title: '', body: '' }) //this is clearing the fields after submit.
  }

  render() {
    return (
      <div className="post">
        <form onSubmit={this.handleSubmit} className="form">
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
          <button>Update</button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    update: (data) => dispatch(update(data)),
  }
}

export default connect(null, mapDispatchToProps)(EditComponent)
