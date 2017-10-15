import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import { getAllPosts, getPostsForAGivenCategory } from '../utils/readApi'
import PostDetail from './PostDetail'
import { connect } from 'react-redux'
import { getPosts } from '../actions'

class Posts extends Component{
 

  componentDidMount() {
    this.props.getPosts()
  }

  render(){
    const { posts } = this.props
    return (
         <div className="posts">
         <ol>
            {posts.map((post,index) => (
              <Link
                to={`/posts/${post.id}`}
                className="post"
                key={index}
                >
                
                 <li key={post.id}>{post.title}
                  
                 </li>
              </Link>                
              ))}
          </ol>
            </div> 
    )
  }
}

const mapStateToProps = ({ posts }) => {
  return {
  posts: posts.posts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPosts: (data) => dispatch(getPosts(data))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Posts)