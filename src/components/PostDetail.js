import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { getPostDetails, getPostsForAGivenCategory } from '../utils/readApi'
import { getPost } from '../actions/postsAction'
import { connect } from 'react-redux'


class PostDetail extends Component{
  state = {
    post: []
  }
  componentDidMount() {
    getPostDetails(this.props.postid).then((post) => {
    this.setState({post})
  })
  }

  render(){
    const { post } = this.state
    return (
         <div className="postDetail">
                <h1>{post.title}</h1>
                <p>{post.body}</p>
                <p>posted on <span>{post.timestamp}</span></p>
                <p>by <span>{post.author}</span></p>
            </div> 
    )
  }
}

export default PostDetail