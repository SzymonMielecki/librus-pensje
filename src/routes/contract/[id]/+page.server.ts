import { getContractWhereId } from '$lib/server/services/contract.js';

export const load = async ({ params }) => {
	const thisContractId = Number(params.id);
	return {
		contract: getContractWhereId(thisContractId)
	};
};
