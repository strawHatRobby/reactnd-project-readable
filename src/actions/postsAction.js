import { getAllPosts } from '../utils/readApi'

export const FETCH_POSTS = 'FETCH_POSTS'

export const fetchAllPosts = (posts) => ({
	type: FETCH_POSTS,
	posts
})
