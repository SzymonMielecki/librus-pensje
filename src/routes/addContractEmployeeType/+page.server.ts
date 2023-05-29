import type { Actions, PageServerLoad } from './$types';
import { fail } from '@sveltejs/kit';
import { z } from 'zod';
import { superValidate } from 'sveltekit-superforms/server';
import { createContractEmployeeType } from '../../lib/server/schema/contractEmployeeType';
import { insertContractEmployeeTypeSchema } from '../../lib/server/schema/contractEmployeeType';

const schema = z.object({
	name: z.string().min(1)
});

export const load: PageServerLoad = async (event) => {
	const form = await superValidate(event, schema);
	console.log(insertContractEmployeeTypeSchema.parse(form.data));
	return { form };
};

export const actions: Actions = {
	default: async (event) => {
		const form = await superValidate(event, schema);
		if (!form.valid) {
			return fail(400, {
				form
			});
		}
		try {
			createContractEmployeeType(form.data); // random uuid something
		} catch (err) {
			return fail(500, { message: 'Could not create' });
		}
		return { status: 201 };
	}
};
