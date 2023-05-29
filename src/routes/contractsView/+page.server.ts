import type { PageServerLoad, Actions } from './$types';

import { getAllContracts } from '$lib/server/services/contract';

export const load: PageServerLoad = async () => {
	return {
		contracts: getAllContracts()
	};
};

export const actions: Actions = {};
