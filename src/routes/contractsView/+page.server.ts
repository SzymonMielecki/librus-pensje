import type { PageServerLoad, Actions } from './$types';

import { getAllContracts } from '$lib/db/schema/contract';

export const load: PageServerLoad = async () => {
	const contracts = getAllContracts();
	return {
		contracts: contracts
	};
};

export const actions: Actions = {};
