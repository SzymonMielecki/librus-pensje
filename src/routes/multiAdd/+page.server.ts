import type { PageServerLoad } from './$types';
import type { Actions } from './$types';
import { prisma } from '$lib/server/prisma';
import { fail } from '@sveltejs/kit';

export const load: PageServerLoad = async () => {
	return {
		teachers: await prisma.teachers.findMany(),
		subjects: await prisma.subjects.findMany(),
		contractTypes: await prisma.contractTypes.findMany(),
		categories: await prisma.categories.findMany()
	};
};

export const actions: Actions = {
	createCategory: async ({ request }) => {
		const { name } = Object.fromEntries(await request.formData()) as {
			name: string;
		};
		try {
			await prisma.categories.create({
				data: {
					name
				}
			});
		} catch (err) {
			return fail(500, { message: 'Could not create subject' });
		}
		return {
			status: 201
		};
	},
	createContract: async ({ request }) => {
		const { teacher, subject, contractType, category, hourlyRate, contractNumber } =
			Object.fromEntries(await request.formData()) as {
				teacher: string;
				subject: string;
				contractType: string;
				category: string;
				hourlyRate: string;
				contractNumber: string;
			};
		try {
			await prisma.contracts.create({
				data: {
					teacherName: teacher,
					subjectName: subject,
					contractTypeName: contractType,
					categoryName: category,
					hourlyRate: Number(hourlyRate),
					contractNumber: contractNumber
				}
			});
		} catch (err) {
			return fail(500, { message: 'Could not create subject' });
		}
		return {
			status: 201
		};
	},
	createContractType: async ({ request }) => {
		const { name } = Object.fromEntries(await request.formData()) as {
			name: string;
		};
		try {
			await prisma.contractTypes.create({
				data: {
					name
				}
			});
		} catch (err) {
			return fail(500, { message: 'Could not create subject' });
		}
		return {
			status: 201
		};
	},
	createSubject: async ({ request }) => {
		const { name } = Object.fromEntries(await request.formData()) as {
			name: string;
		};
		try {
			await prisma.subjects.create({
				data: {
					name
				}
			});
		} catch (err) {
			return fail(500, { message: 'Could not create subject' });
		}
		return {
			status: 201
		};
	},
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
