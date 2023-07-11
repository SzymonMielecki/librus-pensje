import { getAllContracts } from '$lib/server/services/contract.js';

export const load = async () => {
	return {
		contracts: getAllContracts()
	};
};

export const actions = {};
