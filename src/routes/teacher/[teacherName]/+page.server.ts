import type { PageServerLoad, Actions } from './$types';

import { prisma } from '$lib/server/prisma';
export const load: PageServerLoad = async ({ params }) => {
	const thisTeacherName: string = params.teacherName;
	console.log(params);
	return {
		teacher: await prisma.teachers.findUnique({ where: { name: thisTeacherName } }),
		contracts: await prisma.contracts.findMany({ where: { teacherName: thisTeacherName } }),
		september: await prisma.contracts.findMany({
			where: { teacherName: thisTeacherName, month: 9 },
			select: { hoursWorked: true }
		}),
		october: await prisma.contracts.findMany({
			where: { teacherName: thisTeacherName, month: 10 },
			select: { hoursWorked: true }
		}),
		november: await prisma.contracts.findMany({
			where: { teacherName: thisTeacherName, month: 11 },
			select: { hoursWorked: true }
		}),
		december: await prisma.contracts.findMany({
			where: { teacherName: thisTeacherName, month: 12 },
			select: { hoursWorked: true }
		}),
		january: await prisma.contracts.findMany({
			where: { teacherName: thisTeacherName, month: 1 },
			select: { hoursWorked: true }
		}),
		february: await prisma.contracts.findMany({
			where: { teacherName: thisTeacherName, month: 2 },
			select: { hoursWorked: true }
		}),
		march: await prisma.contracts.findMany({
			where: { teacherName: thisTeacherName, month: 3 },
			select: { hoursWorked: true }
		}),
		april: await prisma.contracts.findMany({
			where: { teacherName: thisTeacherName, month: 4 },
			select: { hoursWorked: true }
		}),
		may: await prisma.contracts.findMany({
			where: { teacherName: thisTeacherName, month: 5 },
			select: { hoursWorked: true }
		}),
		june: await prisma.contracts.findMany({
			where: { teacherName: thisTeacherName, month: 6 },
			select: { hoursWorked: true }
		})
	};
};
