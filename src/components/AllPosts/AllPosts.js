import React from 'react'
import './AllPosts.styles.css'
//connecting to redux
import { connect } from 'react-redux'
//importing componnets
import Post from '../post/post'
import EditComponent from '../editcomponent/editcomponent'

const AllPosts = ({ posts }) => {
  console.log('posts:', posts)
  return (
    <div>
      <h1 className="post_heading">All Posts</h1>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            {post.editing ? (
              <EditComponent
                key={post.id}
                id={post.id}
                editing={post.editing}
              />
            ) : (
              <Post
                key={post.id}
                id={post.id}
                title={post.title}
                body={post.body}
              />
            )}
          </div>
        )
      })}
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    posts: state.form.posts,
  }
}

export default connect(mapStateToProps, null)(AllPosts)
