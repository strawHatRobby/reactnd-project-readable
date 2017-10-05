import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { getAllCategories, getPostsForAGivenCategory } from '../utils/readApi'


class Categories extends Component{

	render(){
		const { categories } = this.props
		return (
				 <div className="categories">
            {this.props.categories.map((category) => (
              <Link
                to={`/${category.path}/posts`}
                className="category"
                key={category.name}
                >
                  <h1>{category.name}</h1>
              </Link>                
              ))}
            </div> 
		)
	}
}

export default Categories