import type { PageServerLoad, Actions } from './$types';

import { prisma } from '$lib/server/prisma';
import { fail } from '@sveltejs/kit';

export const load: PageServerLoad = async () => {
	const d = new Date();
	return {
		contracts: await prisma.contracts.findMany({ where: { month: d.getMonth() + 1 } })
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
