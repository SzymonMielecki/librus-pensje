// import type { PageServerLoad, Actions } from './$types';

// import { prisma } from '$lib/server/prisma';
// export const load: PageServerLoad = async ({ url }) => {
// 	const teacherName = url.searchParams.get('teacherName');
// 	console.log(teacherName);
// 	return {
// 		teacher: await prisma.teachers.findUnique({ where: { name: teacherName } }),
// 		contracts: await prisma.contracts.findMany({ where: { name: teacherName } }),
// 		september: await prisma.contracts.findUnique({
// 			where: { name: teacherName, month: 9 },
// 			select: { hoursWorked: true }
// 		}),
// 		october: await prisma.contracts.findUnique({
// 			where: { name: teacherName, month: 10 },
// 			select: { hoursWorked: true }
// 		}),
// 		november: await prisma.contracts.findUnique({
// 			where: { name: teacherName, month: 11 },
// 			select: { hoursWorked: true }
// 		}),
// 		december: await prisma.contracts.findUnique({
// 			where: { name: teacherName, month: 12 },
// 			select: { hoursWorked: true }
// 		}),
// 		january: await prisma.contracts.findUnique({
// 			where: { name: teacherName, month: 1 },
// 			select: { hoursWorked: true }
// 		}),
// 		february: await prisma.contracts.findUnique({
// 			where: { name: teacherName, month: 2 },
// 			select: { hoursWorked: true }
// 		}),
// 		march: await prisma.contracts.findUnique({
// 			where: { name: teacherName, month: 3 },
// 			select: { hoursWorked: true }
// 		}),
// 		april: await prisma.contracts.findUnique({
// 			where: { name: teacherName, month: 4 },
// 			select: { hoursWorked: true }
// 		}),
// 		may: await prisma.contracts.findUnique({
// 			where: { name: teacherName, month: 5 },
// 			select: { hoursWorked: true }
// 		}),
// 		june: await prisma.contracts.findUnique({
// 			where: { name: teacherName, month: 6 },
// 			select: { hoursWorked: true }
// 		})
// 	};
// };
