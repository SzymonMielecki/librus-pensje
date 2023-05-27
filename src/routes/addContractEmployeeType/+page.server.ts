import type { Actions, PageServerLoad } from './$types';
import { fail } from '@sveltejs/kit';
import { z } from 'zod';
import { prisma } from '$lib/server/prisma';
import { superValidate } from 'sveltekit-superforms/server';
import { createContractEmployeeType } from '$lib/server/services/contractEmployeeType';

const schema = z.object({
	name: z.string().min(1)
});

export const load: PageServerLoad = async (event) => {
	const form = await superValidate(event, schema);
	return { form };
};

export const actions: Actions = {
	default: async (event) => {
		const form = await superValidate(event, schema);
		if (!form.valid) {
			return fail(400, {
				form
			});
		}
		try {
			createContractEmployeeType(form.data);
		} catch (err) {
			return fail(500, { message: 'Could not create' });
		}
		return { status: 201 };
	}
};
