import React from 'react'
import './AllPosts.styles.css'
//connecting to redux
import { connect } from 'react-redux'
//importing componnets
import Post from '../post/post'

const AllPosts = ({ posts }) => {
  console.log('posts:', posts)
  return (
    <div>
      <h1 className="post_heading">All Posts</h1>
      {posts.map((post) => {
        return (
          <Post
            key={post.id}
            title={post.title}
            body={post.body}
            id={post.id}
          />
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
