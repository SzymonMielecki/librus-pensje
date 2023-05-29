import { fail } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';
import { createCategory, insertCategorySchema } from '$lib/server/services/category';

export const load = async (event) => {
	const form = await superValidate(event, insertCategorySchema);
	return { form };
};

export const actions = {
	default: async (event) => {
		const form = await superValidate(event, insertCategorySchema);
		if (!form.valid) {
			return fail(400, {
				form
			});
		}
		try {
			createCategory(form.data);
		} catch (err) {
			return fail(500, { message: 'Could not create contract type' });
		}
		return { status: 201 };
	}
};
