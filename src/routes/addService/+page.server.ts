import { fail } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';
import { createService, insertServiceSchema } from '$lib/server/services/service';

export const load = async (event) => {
	const form = await superValidate(event, insertServiceSchema);
	return { form };
};

export const actions = {
	default: async (event) => {
		const form = await superValidate(event, insertServiceSchema);
		if (!form.valid) {
			return fail(400, {
				form
			});
		}
		try {
			createService(form.data);
		} catch (err) {
			return fail(500, { message: 'Could not create contract type' });
		}
		return { status: 201 };
	}
};
