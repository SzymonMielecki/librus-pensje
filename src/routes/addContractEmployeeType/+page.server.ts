import { fail } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';
import {
	createContractEmployeeType,
	insertContractEmployeeTypeSchema
} from '$lib/server/services/contractEmployeeType';

export const load = async (event) => {
	const form = await superValidate(event, insertContractEmployeeTypeSchema);
	return { form };
};

export const actions = {
	default: async (event) => {
		const form = await superValidate(event, insertContractEmployeeTypeSchema);
		if (!form.valid) {
			return fail(400, {
				form
			});
		}
		try {
			createContractEmployeeType(form.data);
		} catch (err) {
			return fail(500, { message: 'Could not create contract type' });
		}
		return { status: 201 };
	}
};
