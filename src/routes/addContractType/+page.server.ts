import type { Actions, PageServerLoad } from './$types';
import { fail } from '@sveltejs/kit';
import { z } from 'zod';
import { prisma } from '$lib/server/prisma';
import { superValidate } from 'sveltekit-superforms/server';

const contractTypeSchema = z.object({
	contractTypeName: z.string().min(1)
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
			await prisma.contractTypes.create({
				data: {
					name: form.data.contractTypeName
				}
			});
		} catch (err) {
			return fail(500, { message: 'Could not create contract type' });
		}
		return { status: 201 };
	}
};
