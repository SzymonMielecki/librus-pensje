import type { Actions, PageServerLoad } from './$types';
import { prisma } from '$lib/server/prisma';
import { getAllEmployees } from '$lib/server/services/employee';

import { fail } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';
import { z } from 'zod';
import { createContract } from '$lib/server/services/contract';

const schema = z.object({
	employeeId: z.string().nonempty(),
	number: z.string().nonempty(),
	contractTypeId: z.string().nonempty(),
	fixedSalary: z.number().nonnegative(),
	salaryTypeId: z.string()
});

export const load: PageServerLoad = async (event) => {
	const form = await superValidate(event, schema);
	return {
		employee: getAllEmployees(),
		contractType: await prisma.contractType.findMany(),
		salaryType: await prisma.salaryType.findMany(),
		uop: await prisma.contractType.findUnique({ where: { name: 'Umowa o Pracę' } }),
		form
	};
};
export const actions: Actions = {
	default: async (event) => {
		const form = await superValidate(event, schema);
		console.log(form);
		console.log(form.data);
		if (!form.valid) return fail(400, { message: 'Invalid form data' });
		try {
			createContract(form.data);
			console.log('contract created');
		} catch (err) {
			return fail(500, { message: 'Could not create subject' });
		}
		return {
			status: 201,
			form
		};
	}
};
