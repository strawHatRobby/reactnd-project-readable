const api = "http://localhost:3001"

const headers = {
	'Content-Type': 'application/json',
	'Authorization' : (Math.random()*1000000000000000000).toString(36)
}

export const getAllCategories = () => {
	return fetch(`${api}/categories`, { headers })
		.then(response => {
			if(!response.ok){
				throw response
			} else 
			return response.json()})
		.then(data => data.categories)
		.catch((error) => {
			console.log(`failed to fetch the data because 'categories' were ${error.statusText}`)
		})

}
{/*for debug purposes only */}
export const allCategories = () => {
	fetch(`${api}/posts`, { headers })
		.then(response => {
			if(!response.ok){
				throw response
			} else 
			return response.json()})
		.then(data => console.log(data))
		.catch((error) => {
			console.log(`failed to fetch the data because 'categories' were ${error.statusText}`)
		})
}

export const getPostsForAGivenCategory = (category ) => {
	fetch(`${api}/${category}/posts`, { headers })
		.then(response => {
			if(!response.ok){
				throw response
			} else 
			return response.json()})
		.then(data => console.log(data))
		.catch((error) => {
			console.log(`failed to fetch the data because 'posts' for ${category} were ${error.statusText}`)
		})
}

export const getAllPosts = () => {
	return fetch(`${api}/posts`, { headers })
		.then(response => {
			if(!response.ok){
				throw response
			} else 
			return response.json()})
		.then(data => data)
		.catch((error) => {
			console.log(`failed to fetch the data because 'posts' were ${error.statusText}`)
		})
}


export const getPostDetails = (postID ) => {
	fetch(`${api}/posts/${postID}`, { headers })
		.then(response => {
			if(!response.ok){
				throw response
			} else 
			return response.json()})
		.then(data => console.log(data))
		.catch((error) => {
			console.log(`failed to fetch the data because 'post details' were ${error.statusText}`)
		})
}

export const getComments = (postID ) => {
	fetch(`${api}/posts/${postID}/comments`, { headers })
		.then(response => {
			if(!response.ok){
				throw response
			} else 
			return response.json()})
		.then(data => console.log(data))
		.catch((error) => {
			console.log(`failed to fetch the data because 'comments' were ${error.statusText}`)
		})
}

export const getCommentDetails = (postID, commentID ) => {
	fetch(`${api}/posts/${postID}/comments/${commentID}`, { headers })
		.then(response => {
			if(!response.ok){
				throw response
			} else 
			return response.json()})
		.then(data => console.log(data))
		.catch((error) => {
			console.log(`failed to fetch the data because 'comment details' were ${error.statusText}`)
		})
}