import { getAllContractEmployeeTypes } from '$lib/server/services/contractEmployeeType';

export const load = async () => {
	return {
		contractEmployeeType: getAllContractEmployeeTypes()
	};
};
