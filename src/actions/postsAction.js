import { getAllPosts } from '../utils/readApi'

export const FETCH_POSTS = 'FETCH_POSTS'

export const GET_POST = 'GET_POST'

export const fetchAllPosts = (posts) => ({
	type: FETCH_POSTS,
	posts
})

export const getPost = (post) => ({
	type: GET_POST,
	post
})
