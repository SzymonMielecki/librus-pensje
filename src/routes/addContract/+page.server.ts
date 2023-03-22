import type { Actions, PageServerLoad } from './$types';
import { prisma } from '$lib/server/prisma';
import { fail } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';
import { z } from 'zod';

const contractSchema = z.object({
	teacherName: z.string().min(1),
	subjectName: z.string().min(1),
	contractTypeName: z.string().min(1),
	categoryName: z.string().min(1),
	hourlyRate: z.number().min(1),
	contractNumber: z.string().min(1)
});

export const load: PageServerLoad = async (event) => {
	const form = await superValidate(event, contractSchema);
	return {
		teachers: await prisma.teachers.findMany(),
		subjects: await prisma.subjects.findMany(),
		contractTypes: await prisma.contractTypes.findMany(),
		categories: await prisma.categories.findMany(),
		form
	};
};

export const actions: Actions = {
	default: async (event) => {
		const form = await superValidate(event, contractSchema);
		if (!form.valid) {
			return fail(400, {
				form
			});
		}
		try {
			await prisma.contracts.createMany({
				data: [
					{
						teacherName: form.data.teacherName,
						subjectName: form.data.subjectName,
						contractTypeName: form.data.contractTypeName,
						categoryName: form.data.categoryName,
						hourlyRate: form.data.hourlyRate,
						contractNumber: form.data.contractNumber,
						month: 9
					},
					{
						teacherName: form.data.teacherName,
						subjectName: form.data.subjectName,
						contractTypeName: form.data.contractTypeName,
						categoryName: form.data.categoryName,
						hourlyRate: form.data.hourlyRate,
						contractNumber: form.data.contractNumber,
						month: 10
					},
					{
						teacherName: form.data.teacherName,
						subjectName: form.data.subjectName,
						contractTypeName: form.data.contractTypeName,
						categoryName: form.data.categoryName,
						hourlyRate: form.data.hourlyRate,
						contractNumber: form.data.contractNumber,
						month: 11
					},
					{
						teacherName: form.data.teacherName,
						subjectName: form.data.subjectName,
						contractTypeName: form.data.contractTypeName,
						categoryName: form.data.categoryName,
						hourlyRate: form.data.hourlyRate,
						contractNumber: form.data.contractNumber,
						month: 12
					},
					{
						teacherName: form.data.teacherName,
						subjectName: form.data.subjectName,
						contractTypeName: form.data.contractTypeName,
						categoryName: form.data.categoryName,
						hourlyRate: form.data.hourlyRate,
						contractNumber: form.data.contractNumber,
						month: 1
					},
					{
						teacherName: form.data.teacherName,
						subjectName: form.data.subjectName,
						contractTypeName: form.data.contractTypeName,
						categoryName: form.data.categoryName,
						hourlyRate: form.data.hourlyRate,
						contractNumber: form.data.contractNumber,
						month: 2
					},
					{
						teacherName: form.data.teacherName,
						subjectName: form.data.subjectName,
						contractTypeName: form.data.contractTypeName,
						categoryName: form.data.categoryName,
						hourlyRate: form.data.hourlyRate,
						contractNumber: form.data.contractNumber,
						month: 3
					},
					{
						teacherName: form.data.teacherName,
						subjectName: form.data.subjectName,
						contractTypeName: form.data.contractTypeName,
						categoryName: form.data.categoryName,
						hourlyRate: form.data.hourlyRate,
						contractNumber: form.data.contractNumber,
						month: 4
					},
					{
						teacherName: form.data.teacherName,
						subjectName: form.data.subjectName,
						contractTypeName: form.data.contractTypeName,
						categoryName: form.data.categoryName,
						hourlyRate: form.data.hourlyRate,
						contractNumber: form.data.contractNumber,
						month: 5
					},
					{
						teacherName: form.data.teacherName,
						subjectName: form.data.subjectName,
						contractTypeName: form.data.contractTypeName,
						categoryName: form.data.categoryName,
						hourlyRate: form.data.hourlyRate,
						contractNumber: form.data.contractNumber,
						month: 6
					}
				],
				skipDuplicates: true
			});
		} catch (err) {
			return fail(500, { message: 'Could not create subject' });
		}
		return {
			status: 201
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
