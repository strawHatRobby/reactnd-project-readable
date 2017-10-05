import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { getAllCategories, getPostsForAGivenCategory } from '../utils/readApi'


class Categories extends Component{
	state = {
		categories: []
	}

	componentDidMount() {
	  getAllCategories().then((categories) => {
	  this.setState({categories})
	})
	}

	render(){
		const { categories } = this.state
		return (
				 <div className="categories">
            {categories.map((category) => (
              <Link
                to={`/${category.path}/posts`}
                className="category"
                >
                  <h1>{category.name}</h1>
              </Link>                
              ))}
            </div> 
		)
	}
}

export default Categories