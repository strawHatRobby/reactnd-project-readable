import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as ReadAPI from './utils/readApi'


class App extends Component {
  state = {
    screen: 'posts',
    categories: [],
    posts: []

  }


componentDidMount() {
ReadAPI.getAllCategories().then((categories) => {
  this.setState({categories})
})
ReadAPI.getAllPosts().then((posts) => {
  this.setState({posts})
})
ReadAPI.getPostsForAGivenCategory('react')
ReadAPI.getComments()
}

  render() {
    return(
      <div className="App">
       {this.state.screen === 'main' && (
          <div className="categories">
            {this.state.categories.map((category) => (
                  <h1>{category.name}</h1>
              ))}
          </div>
      
        )} 
        {this.state.screen === 'posts' && (
              <div className="posts">
              {this.state.posts.map((post) => (
                    <h1 key={post.id}>{post.title}</h1>
                ))}
              </div>
          )}
      </div>
    )
  }

}


export default App;
