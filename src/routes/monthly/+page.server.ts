import type { PageServerLoad, Actions } from './$types';

import { prisma } from '$lib/server/prisma';
import { fail } from '@sveltejs/kit';

export const load: PageServerLoad = async () => {
	const hoursMonths = await prisma.hoursMonths.findMany();
	const contracts = await prisma.contracts.findMany({
		include: {
			hoursPerMonth: true
		}
	});
	return {
		contracts: contracts,
		hoursMonths: hoursMonths
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
};
