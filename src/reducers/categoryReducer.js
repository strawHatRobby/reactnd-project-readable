const categories = (state = { categories: [] }, action) => {
	switch(action.type){
		case 'FETCH_CATEGORIES':
			return  {
				...state,
				categories: action.categories
			}
		default: 
			return state
	}
}

export default categories