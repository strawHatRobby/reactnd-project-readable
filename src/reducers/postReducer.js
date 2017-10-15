const posts = (state = { posts: [] }, action) => {
	switch(action.type){
		case 'POST_GET':
			return  {
				...state,
				posts: action.posts
			}
		default: 
			return state
	}
}

export default posts