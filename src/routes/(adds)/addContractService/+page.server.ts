import { fail, redirect } from '@sveltejs/kit';
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
import { getContractWhereId } from '$lib/server/services/contract';

export const load = async ({ url }) => {
	const form = await superValidate(insertContractServiceSchema);
	return {
		thisContractInfo: getContractWhereId(Number(url.searchParams.get('contractId'))),
		service: getAllServices(),
		salaryType: getAllSalaryTypes(),
		category: getAllCategories(),
		contractEmployeeType: getAllContractEmployeeTypes(),
		uop: getContractTypeUOP(),
		form
	};
};
export const actions = {
	default: async ({ request, url }) => {
		const form = await superValidate(request, insertContractServiceSchema);
		if (!form.valid) {
			return fail(400, { form });
		}
		try {
			console.log('form.data', form.data);
			await createContractService({
				contractId: Number(url.searchParams.get('contractId')),
				serviceId: form.data.serviceId,
				salary: form.data.salary,
				salaryTypeId: form.data.salaryTypeId,
				categoryId: form.data.categoryId,
				contractEmployeeTypeId: form.data.contractEmployeeTypeId
			});
			// return { form };
		} catch (err) {
			return fail(500, { message: 'Could not create contract type' });
		}
		throw redirect(303, `/contract/${url.searchParams.get('contractId')}`);
	}
};
