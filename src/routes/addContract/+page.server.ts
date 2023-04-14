import type { Actions, PageServerLoad } from './$types';
import { prisma } from '$lib/server/prisma';
import { fail } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';
import { z } from 'zod';

const contractSchema = z.object({
	employeeId: z.string().nonempty(),
	contractNumber: z.string().nonempty(),
	contractTypeId: z.string().nonempty(),
	fixedSalary: z.number().nonnegative(),
	salaryTypeId: z.string().nonempty(),
	contractService: z.array(
		z.object({
			serviceId: z.string().nonempty(),
			salary: z.number().nonnegative(),
			salaryTypeId: z.string().nonempty(),
			categoryId: z.string().nonempty(),
			contractEmployeeTypeId: z.string().nonempty()
		})
	)
});

export const load: PageServerLoad = async (event) => {
	const form = await superValidate(event, contractSchema);
	return {
		employee: await prisma.employee.findMany(),
		contractType: await prisma.contractType.findMany(),
		service: await prisma.service.findMany(),
		salaryType: await prisma.salaryType.findMany(),
		category: await prisma.category.findMany(),
		contractEmployeeType: await prisma.contractEmployeeType.findMany(),
		form
	};
};
export const actions: Actions = {
	default: async (event) => {
		const form = await superValidate(event, contractSchema);
		console.log(form);
		if (!form.valid) {
			return fail(400, {
				form
			});
		}
		try {
			// create contract here
			await prisma.contract.create({
				data: {
					employeeId: form.data.employeeId,
					number: form.data.contractNumber,
					contractTypeId: form.data.contractTypeId,
					fixedSalary: form.data.fixedSalary,
					salaryTypeId: form.data.salaryTypeId,
					contractService: {
						createMany: {
							data: form.data.contractService.map((s) => ({
								serviceId: s.serviceId,
								salary: s.salary,
								salaryTypeId: s.salaryTypeId,
								categoryId: s.categoryId,
								contractEmployeeTypeId: s.contractEmployeeTypeId,
								hoursMonths: {
									createMany: {
										data: [
											{ month: 1 },
											{ month: 2 },
											{ month: 3 },
											{ month: 4 },
											{ month: 5 },
											{ month: 6 },
											{ month: 7 },
											{ month: 8 },
											{ month: 9 },
											{ month: 10 },
											{ month: 11 },
											{ month: 12 }
										]
									}
								}
							}))
						}
					}
				}
			});
		} catch (err) {
			return fail(500, { message: 'Could not create subject' });
		}
		return {
			status: 201,
			form
		};
	}
};
