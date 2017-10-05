const api = "http://localhost:3001"

const headers = {
	'Authorization' : (Math.random()*1000000000000000000).toString(36)
}

export const getAllCategories = () => {
	return fetch(`${api}/categories`, { headers })
		.then(response => response.json())
		.then(data => data.categories)
}

export const getPostsForAGivenCategory = (category ) => {
	fetch(`${api}/${category}/posts`, { headers })
		.then(response => response.json())
		.then(data => data)
}

export const getAllPosts = () => {
	return fetch(`${api}/posts`, { headers })
		.then(response => response.json())
		.then(data => data)
}

export const getPostDetails = (postID ) => {
	fetch(`${api}/posts/${postID}`, { headers })
		.then(response => response.json())
		.then(data => data)
}

export const getComments = (postID ) => {
	fetch(`${api}/posts/${postID}/comments`, { headers })
		.then(response => response.json())
		.then(data => data)
}

export const getCommentDetails = (postID, commentID ) => {
	fetch(`${api}/posts/${postID}/comments/${commentID}`, { headers })
		.then(response => response.json())
		.then(data => data)
}