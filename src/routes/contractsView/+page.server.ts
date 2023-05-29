import type { PageServerLoad, Actions } from './$types';

// import { getAllContracts } from '$lib/server/db/schema/contract';

export const load: PageServerLoad = async () => {
	// const contracts = getAllContracts();
	return {
		contracts: []
	};
};

export const actions: Actions = {};
