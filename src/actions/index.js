import { fetchAllPosts } from './postsAction'
import { getAllPosts } from '../utils/readApi'

export const getPosts = () => dispatch => (
		getAllPosts()
			.then(posts => dispatch(fetchAllPosts(posts)))

	)