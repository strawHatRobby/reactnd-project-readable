import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { getComments } from '../utils/readApi'


class Posts extends Component{
  state = {
    comments: []
  }

  componentDidMount() {
  }

  render(){
    const { comments } = this.state
    return (
         <div className="posts">
         <h1>Comments come here</h1>
            </div> 
    )
  }
}

export default Posts