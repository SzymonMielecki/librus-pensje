import type { PageServerLoad, Actions } from './$types';

import { prisma } from '$lib/server/prisma';
export const load: PageServerLoad = async ({ params }) => {
	const thisTeacherName: string = params.teacherName;
	console.log(params);
	return {
		contracts: await prisma.contracts.groupBy({
			by: ['teacherName', 'subjectName', 'month'],
			where: { teacherName: thisTeacherName }
		})
	};
};
