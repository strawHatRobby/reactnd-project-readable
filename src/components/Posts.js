import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import { getAllPosts, getPostsForAGivenCategory } from '../utils/readApi'
import PostDetail from './PostDetail'

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
                
                 <li key={post.id}>{post.title}
                  <Route exact path={`/posts/${post.id}`}
                    render={(props) => <PostDetail {...props} postid={post.id}/>}
                    />
                 </li>
              </Link>                
              ))}
          </ol>
            </div> 
    )
  }
}

export default Posts