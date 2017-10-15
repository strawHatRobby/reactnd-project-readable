import { getAllCategories } from '../utils/readApi'

export const FETCH_CATEGORIES = 'FETCH_CATEGORIES'

export const fetchAllCategories = (categories) => ({
	type: FETCH_CATEGORIES,
	categories
})
