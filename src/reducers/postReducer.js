const posts = (state = { post: [] }, action) => {
	switch(action.type){
		case 'POST_GET':
			return  {
				...state,
				post: action.posts
			}
		default: 
			return state
	}
}

export default posts