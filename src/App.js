import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import * as ReadAPI from './utils/readApi'
import Categories from './components/Categories'

class App extends Component {
  state = {
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
      <Route exact path="/"
        render={() => (
          <div className='main-view'>
          <h1>Select by</h1>
          <Link to="/categories/"
           > 
           <h1>Categories</h1>
          
          </Link>
          </div>
          )}
          />
      <Route exact path="/categories/"
            render={() => (
                      <Categories categories={this.state.categories} />
              )}
      />
       
      </div>
    )
  }

}


export default App;
