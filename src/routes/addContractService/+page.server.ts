import { fail } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';
import { getAllCategories } from '$lib/server/services/category';
import {
	createContractService,
	insertContractServiceSchema
} from '$lib/server/services/contractService';
import { getAllSalaryTypes } from '$lib/server/services/salaryType';
import { getAllServices } from '$lib/server/services/service';
import { getAllContractEmployeeTypes } from '$lib/server/services/contractEmployeeType';
import { getContractTypeUOP } from '$lib/server/services/contractType';
import { getAllContracts } from '$lib/server/services/contract';

export const load = async (event) => {
	const form = await superValidate(event, insertContractServiceSchema);
	return {
		contract: getAllContracts(),
		service: getAllServices(),
		salaryType: getAllSalaryTypes(),
		category: getAllCategories(),
		contractEmployeeType: getAllContractEmployeeTypes(),
		uop: getContractTypeUOP(),
		form
	};
};
export const actions = {
	default: async (event) => {
		const form = await superValidate(event, insertContractServiceSchema);
		if (!form.valid) {
			return fail(400, {
				form
			});
		}
		try {
			createContractService(form.data);
		} catch (err) {
			return fail(500, { message: 'Could not create contract type' });
		}
		return { status: 201 };
	}
};
