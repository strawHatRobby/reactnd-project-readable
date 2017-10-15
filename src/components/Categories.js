import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { getAllCategories, getPostsForAGivenCategory } from '../utils/readApi'
import { connect } from 'react-redux'
import { getCategories } from '../actions'

class Categories extends Component{

	componentDidMount() {
		this.props.getCategories()
	
	}

	render(){
		const { categories } = this.props
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

const mapStateToProps = ({ categories }) => {
	return{
		categories: categories.categories
	}
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCategories: () => dispatch(getCategories())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Categories)