import type { Actions, PageServerLoad } from './$types';
import { prisma } from '$lib/server/prisma';
import { fail } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';
import { z } from 'zod';
import { getAllCategories } from '$lib/server/services/category';
import { createContractService } from '$lib/server/services/contractService';

const schema = z.object({
	contractId: z.string().nonempty(),
	serviceId: z.string().nonempty(),
	salary: z.number().nonnegative(),
	salaryTypeId: z.string(),
	categoryId: z.string().nonempty(),
	contractEmployeeTypeId: z.string().nonempty(),
	hoursMonths: z.array(
		z.object({
			month: z.number().nonnegative(),
			hoursWorked: z.number().nonnegative()
		})
	)
});

const hoursMonths = [
	{ month: 1, hoursWorked: 0 },
	{ month: 2, hoursWorked: 0 },
	{ month: 3, hoursWorked: 0 },
	{ month: 4, hoursWorked: 0 },
	{ month: 5, hoursWorked: 0 },
	{ month: 6, hoursWorked: 0 },
	{ month: 7, hoursWorked: 0 },
	{ month: 8, hoursWorked: 0 },
	{ month: 9, hoursWorked: 0 },
	{ month: 10, hoursWorked: 0 },
	{ month: 11, hoursWorked: 0 },
	{ month: 12, hoursWorked: 0 }
];

export const load: PageServerLoad = async (event) => {
	const form = await superValidate(event, schema);
	return {
		contract: await prisma.contract.findMany(),
		service: await prisma.service.findMany(),
		salaryType: await prisma.salaryType.findMany(),
		category: getAllCategories(),
		contractEmployeeType: await prisma.contractEmployeeType.findMany(),
		uop: await prisma.contractType.findUnique({ where: { name: 'Umowa o Pracę' } }),
		form
	};
};
export const actions: Actions = {
	default: async (event) => {
		const form = await superValidate(event, schema);
		try {
			await prisma.contractService.create({
				data: {
					contractId: form.data.contractId,
					serviceId: form.data.serviceId,
					salary: form.data.salary,
					salaryTypeId: form.data.salaryTypeId,
					categoryId: form.data.categoryId,
					contractEmployeeTypeId: form.data.contractEmployeeTypeId,
					hoursMonths: {
						createMany: {
							data: hoursMonths
						}
					}
				}
			});
			// createContractService(form.data, hoursMonths);
		} catch (err) {
			return fail(500, { message: 'Could not create subject' });
		}
		return {
			status: 201,
			form
		};
	}
};
