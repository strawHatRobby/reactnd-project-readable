import { fetchAllPosts, getPost } from './postsAction'
import { fetchAllCategories } from './categoriesAction'
import * as API from '../utils/readApi'

export const getPosts = () => dispatch => (
		API.getAllPosts()
			.then(posts => dispatch(fetchAllPosts(posts)))

	)

export const getCategories = () => dispatch => (
		API.getAllCategories()
			.then(categories => dispatch(fetchAllCategories(categories)))

	)

export const getPostDetails = (postID) => dispatch => (
		API.getPostDetails(postID)
			.then(post => dispatch(getPost(post)))
	) 