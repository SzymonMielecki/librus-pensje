import { getAllEmployees } from '$lib/server/services/employee';

export const load = async () => {
	return {
		employees: getAllEmployees()
	};
};
