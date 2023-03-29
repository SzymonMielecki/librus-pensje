import type { Actions, PageServerLoad } from './$types';
import { prisma } from '$lib/server/prisma';
import { fail } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';
import { z } from 'zod';

const contractSchema = z.object({
	employeeName: z.string().nonempty(),
	contractTypeName: z.string().nonempty(),
	serviceName: z.array(z.string().nonempty())
});

export const load: PageServerLoad = async (event) => {
	const form = await superValidate(event, contractSchema);
	return {
		employee: await prisma.employee.findMany(),
		contractType: await prisma.contractType.findMany(),
		service: await prisma.service.findMany(),
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
			console.log(
				form.data.employeeName +
					':' +
					(await prisma.employee.findUnique({ where: { name: form.data.employeeName } }))?.id
			);
			console.log(
				form.data.contractTypeName +
					':' +
					(await prisma.contractType.findUnique({ where: { name: form.data.contractTypeName } }))
						?.id
			);
			form.data.serviceName.forEach(async (element) => {
				console.log(
					element + ':' + (await prisma.service.findUnique({ where: { name: element } }))
				);
			});
			console.log(form.data);
			// await prisma.contract.create({
			// 	data: {
			// 		employeeId: (
			// 			await prisma.employee.findUnique({ where: { name: form.data.employeeName } })
			// 		)?.id,
			// 		contractTypeId: (
			// 			await prisma.contractType.findUnique({ where: { name: form.data.contractTypeName } })
			// 		)?.id
			// 	}
			// });
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
