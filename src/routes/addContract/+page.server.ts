import { fail } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';
import { insertContractSchema } from '$lib/server/services/contract';
import { getAllEmployees } from '$lib/server/services/employee';
import { getAllContractTypes, getContractTypeUOP } from '$lib/server/services/contractType';
import { getAllSalaryTypes } from '$lib/server/services/salaryType';
import type { Actions, PageServerLoad } from './$types';
import { loadFlashMessage, redirect } from 'sveltekit-flash-message/server';

export const load = loadFlashMessage(async (event) => {
	const form = await superValidate(event, insertContractSchema);
	return {
		employee: getAllEmployees(),
		contractType: getAllContractTypes(),
		salaryType: getAllSalaryTypes(),
		uop: getContractTypeUOP(),
		form
	};
}) satisfies PageServerLoad;

export const actions = {
	default: async (event) => {
		const form = await superValidate(event, insertContractSchema);
		if (!form.valid) return fail(400, { message: 'Invalid form data' });
		try {
			// createContract(form.data);
			console.log('form', form);
			throw redirect(
				{ type: 'success', message: `Umowa numer ${form.data.number} została dodana!` } as const,
				event
			);
		} catch (err) {
			return fail(500, { message: 'Could not create subject' });
		}
	}
} satisfies Actions;
