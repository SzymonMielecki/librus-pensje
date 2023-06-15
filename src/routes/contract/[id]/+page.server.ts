import { redirect } from 'sveltekit-flash-message/server';
import { deleteContract, getContractWhereId } from '$lib/server/services/contract.js';
import { fail } from '@sveltejs/kit';

export const load = async ({ params }) => {
	const thisContractId = Number(params.id);
	return {
		contract: getContractWhereId(thisContractId)
	};
};

export const actions = {
	deleteContract: async ({ url }) => {
		const id = url.searchParams.get('id');
		if (!id) {
			return fail(400, { message: 'Missing id parameter' });
		}
		try {
			deleteContract(Number(id));
		} catch (err) {
			return fail(500, { message: 'Could not delete contract' });
		}
		throw redirect(303, '/contractsView');
	}
};
