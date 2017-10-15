const posts = (state = { posts: [] }, action) => {
	switch(action.type){
		case 'FETCH_POSTS':
			return  {
				...state,
				posts: action.posts
			}
		default: 
			return state
	}
}

export default posts