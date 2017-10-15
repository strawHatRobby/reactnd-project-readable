import { fetchAllPosts } from './postsAction'
import { fetchAllCategories } from './categoriesAction'
import { getAllPosts, getAllCategories } from '../utils/readApi'

export const getPosts = () => dispatch => (
		getAllPosts()
			.then(posts => dispatch(fetchAllPosts(posts)))

	)

export const getCategories = () => dispatch => (
		getAllCategories()
			.then(categories => dispatch(fetchAllCategories(categories)))

	)