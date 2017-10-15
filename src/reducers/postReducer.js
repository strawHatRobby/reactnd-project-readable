import {FETCH_POSTS, GET_POST } from '../actions/postsAction'
const posts = (state = { posts: [] }, action) => {
	switch(action.type){
		case FETCH_POSTS:
			return  {
				...state,
				posts: action.posts
			}
		case GET_POST:
			return {
				...state,
				post: action.post
			}
		default: 
			return state
	}
}

export default posts