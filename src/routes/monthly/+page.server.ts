import type { PageServerLoad, Actions } from './$types';

import { prisma } from '$lib/server/prisma';
import { fail } from '@sveltejs/kit';

export const load: PageServerLoad = async () => {
	const d = new Date();
	return {
		contractsSeptember: await prisma.contracts.findMany({ where: { month: 9 } }),
		contractsOctober: await prisma.contracts.findMany({ where: { month: 10 } }),
		contractsNovember: await prisma.contracts.findMany({ where: { month: 11 } }),
		contractsDecember: await prisma.contracts.findMany({ where: { month: 12 } }),
		contractsJanuary: await prisma.contracts.findMany({ where: { month: 1 } }),
		contractsFebruary: await prisma.contracts.findMany({ where: { month: 2 } }),
		contractsMarch: await prisma.contracts.findMany({ where: { month: 3 } }),
		contractsApril: await prisma.contracts.findMany({ where: { month: 4 } }),
		contractsMay: await prisma.contracts.findMany({ where: { month: 5 } }),
		contractsJune: await prisma.contracts.findMany({ where: { month: 6 } })
	};
};

export const actions: Actions = {
	deleteContract: async ({ url }) => {
		const id = url.searchParams.get('id');
		if (!id) {
			return fail(400, { message: 'Missing id parameter' });
		}
		try {
			await prisma.contracts.delete({
				where: {
					id: id
				}
			});
		} catch (err) {
			return fail(500, { message: 'Could not delete contract' });
		}
		return {
			status: 200
		};
	}
	// selectMonth: async ({ url }) => {
	// 	const month = url.searchParams.get('month');
	// 	if (!month) {
	// 		const month = 1;
	// 	}
	// 	return {
	// 		status: 200
	// 	};
	// }
};
