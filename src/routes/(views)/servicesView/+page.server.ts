import { getAllServices } from '$lib/server/services/service';

export const load = async () => {
	return {
		services: getAllServices()
	};
};
