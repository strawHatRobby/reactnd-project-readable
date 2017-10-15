import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import * as ReadAPI from './utils/readApi'
import Categories from './components/Categories'
import Posts from './components/Posts'
import PostDetail from './components/PostDetail'
import Comments from './components/Comments'


class App extends Component {



componentDidMount() {
ReadAPI.getPostsForAGivenCategory('react')
ReadAPI.getComments()
}

  render() {
    return(
      <div className="App">
      <Route exact path="/"
        render={() => (
          <div className='main-view'>
          <h1>Select by</h1>
          <Link to="/categories/"
           > 
           <h1>Categories</h1>
          
          </Link>
          <Link to="/posts/"
           > 
           <h1>Posts</h1>
          
          </Link>
          </div>
          )}
          />
      <Route exact path="/categories/"
            component={Categories}
      />
       <Route exact path="/posts/"
            component={Posts}
      />
      </div>
    )
  }

}


export default App;
