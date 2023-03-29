import type { Actions, PageServerLoad } from './$types';
import { fail } from '@sveltejs/kit';
import { z } from 'zod';
import { prisma } from '$lib/server/prisma';
import { superValidate } from 'sveltekit-superforms/server';

const categorySchema = z.object({
	name: z.string().min(1)
});

export const load: PageServerLoad = async (event) => {
	const form = await superValidate(event, categorySchema);
	return { form };
};

export const actions: Actions = {
	default: async (event) => {
		const form = await superValidate(event, categorySchema);
		if (!form.valid) {
			return fail(400, {
				form
			});
		}
		try {
			await prisma.employee.create({
				data: {
					name: form.data.name
				}
			});
		} catch (err) {
			return fail(500, { message: 'Could not create contract type' });
		}
		return { status: 201 };
	}
};
