import type { PageServerLoad, Actions } from './$types';

import { prisma } from '$lib/server/prisma';
import { fail } from '@sveltejs/kit';

export const load: PageServerLoad = async () => {
	const contracts = await prisma.contract.findMany({
		select: {
			id: true,
			number: true,
			employee: true,
			contractType: true,
			fixedSalary: true,
			salaryType: true,
			contractService: {
				select: {
					salary: true,
					salaryType: true,
					category: true,
					contractEmployeeType: true,
					service: true,
					hoursMonths: true
				}
			}
		}
	});
	return {
		contracts: contracts
	};
};

export const actions: Actions = {
	deleteContract: async ({ url }) => {
		const id = url.searchParams.get('id');
		if (!id) {
			return fail(400, { message: 'Missing id parameter' });
		}
		try {
			await prisma.contractService.delete({
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
