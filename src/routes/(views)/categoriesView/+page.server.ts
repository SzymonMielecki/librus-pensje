import { getAllCategories } from '$lib/server/services/category';

export const load = async () => {
	return {
		categories: getAllCategories()
	};
};
