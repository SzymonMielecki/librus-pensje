import { fail } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';
import { createEmployee, insertEmployeeSchema } from '$lib/server/services/employee';

export const load = async (event) => {
	const form = await superValidate(event, insertEmployeeSchema);
	return { form };
};

export const actions = {
	default: async (event) => {
		const form = await superValidate(event, insertEmployeeSchema);
		if (!form.valid) {
			return fail(400, {
				form
			});
		}
		try {
			createEmployee(form.data);
		} catch (err) {
			return fail(500, { message: 'Could not create contract type' });
		}
		return { status: 201 };
	}
};
