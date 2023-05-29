import { fail } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';
import { createContractType, insertContractTypeSchema } from '$lib/server/services/contractType';

export const load = async (event) => {
	const form = await superValidate(event, insertContractTypeSchema);
	return { form };
};

export const actions = {
	default: async (event) => {
		const form = await superValidate(event, insertContractTypeSchema);
		if (!form.valid) {
			return fail(400, {
				form
			});
		}
		try {
			createContractType(form.data);
		} catch (err) {
			return fail(500, { message: 'Could not create contract type' });
		}
		return { status: 201 };
	}
};
