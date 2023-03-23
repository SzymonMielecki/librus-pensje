import type { PageServerLoad, Actions } from './$types';

import { prisma } from '$lib/server/prisma';
import { fail } from '@sveltejs/kit';

export const load: PageServerLoad = async () => {
	return {
		contracts: await prisma.contracts.findMany() // TODO make this get months for contracts
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
