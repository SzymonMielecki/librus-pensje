import type { Actions, PageServerLoad } from './$types';
import { prisma } from '$lib/server/prisma';
import { fail } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';
import { z } from 'zod';

const contractSchema = z.object({
	employeeName: z.string().nonempty(),
	contractNumber: z.string().nonempty(),
	contractTypeName: z.string().nonempty(),
	fixedSalary: z.number().nonnegative(),
	salaryTypeName: z.string().nonempty(),
	service: z.array(
		z.object({
			name: z.string().nonempty(),
			salary: z.number().nonnegative(),
			salaryTypeName: z.string().nonempty(),
			categoryName: z.string().nonempty(),
			contractEmployeeTypeName: z.string().nonempty()
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
			console.log('created contract');
			await prisma.contract.create({
				data: {
					employeeId: (
						await prisma.employee.findUnique({ where: { name: form.data.employeeName } })
					)?.id,
					contractTypeId: (
						await prisma.contractType.findUnique({ where: { name: form.data.contractTypeName } })
					)?.id,
					fixedSalary: form.data.fixedSalary,
					salaryTypeId: (
						await prisma.salaryType.findUnique({ where: { name: form.data.salaryTypeName } })
					)?.id,

					ContractService: {
						create: {
							serviceId: (
								await prisma.service.findUnique({ where: { name: form.data.service[0].name } })
							)?.id,
							salary: form.data.service[0].salary,
							salaryTypeId: (
								await prisma.salaryType.findUnique({
									where: { name: form.data.service[0].salaryTypeName }
								})
							)?.id,
							categoryId: (
								await prisma.category.findUnique({
									where: { name: form.data.service[0].categoryName }
								})
							)?.id,
							contractEmployeeTypeId: (
								await prisma.contractEmployeeType.findUnique({
									where: { name: form.data.service[0].contractEmployeeTypeName }
								})
							)?.id,
							HoursMonths: {
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

// export const actions: Actions = {
// 	createContract: async ({ request }) => {
// 		const { teacher, subject, contractType, category, hourlyRate, contractNumber } =
// 			Object.fromEntries(await request.formData()) as {
// 				teacher: string;
// 				subject: string;
// 				contractType: string;
// 				category: string;
// 				hourlyRate: string;
// 				contractNumber: string;
// 			};
// 		try {
// 			await prisma.contracts.create({
// 				data: {
// 					teacherName: teacher,
// 					subjectName: subject,
// 					contractTypeName: contractType,
// 					categoryName: category,
// 					hourlyRate: Number(hourlyRate),
// 					contractNumber: contractNumber
// 				}
// 			});
// 		} catch (err) {
// 			return fail(500, { message: 'Could not create subject' });
// 		}
// 		return {
// 			status: 201
// 		};
// 	}
// };
