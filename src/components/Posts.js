import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { getAllPosts, getPostsForAGivenCategory } from '../utils/readApi'


class Posts extends Component{
  state = {
    posts: []
  }

  componentDidMount() {
    getAllPosts().then((posts) => {
    this.setState({posts})
  })
  }

  render(){
    const { posts } = this.state
    return (
         <div className="posts">
         <ol>
            {posts.map((post) => (
              <Link
                to={`/posts/${post.id}`}
                className="post"
                >
                
                 <li key={post.id}>{post.title}</li>
              </Link>                
              ))}
          </ol>
            </div> 
    )
  }
}

export default Posts