import React from 'react'
import './App.css'
// importing routing
import { Switch, Route } from 'react-router-dom'
//importing components
import PostForm from './components/PostForm/PostForm'
import AllPosts from './components/AllPosts/AllPosts'

const App = () => {
  console.log('new inst is being created')
  return (
    <div>
      <div className="navbar">
        <h2 className="center">Post It</h2>
      </div>
      <PostForm />
      <AllPosts />
    </div>
  )
}

export default App
