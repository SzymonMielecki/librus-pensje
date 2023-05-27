import type { Actions, PageServerLoad } from './$types';
import { fail } from '@sveltejs/kit';
import { z } from 'zod';
import { prisma } from '$lib/server/prisma';
import { superValidate } from 'sveltekit-superforms/server';
import { createContractType } from '$lib/server/services/contractType';

const contractTypeSchema = z.object({
	name: z.string().min(1)
});

export const load: PageServerLoad = async (event) => {
	const form = await superValidate(event, contractTypeSchema);
	return { form };
};

export const actions: Actions = {
	default: async (event) => {
		const form = await superValidate(event, contractTypeSchema);
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
