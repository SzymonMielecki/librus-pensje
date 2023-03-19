import type { Actions } from './$types';
import { prisma } from '$lib/server/prisma';
import { fail } from '@sveltejs/kit';

export const actions: Actions = {
	createTeacher: async ({ request }) => {
		const { name } = Object.fromEntries(await request.formData()) as {
			name: string;
		};
		try {
			await prisma.teachers.create({
				data: {
					name
				}
			});
		} catch (err) {
			return fail(500, { message: 'Could not create this teacher' });
		}
		return {
			status: 201
		};
	}
};
