import { db } from '../db';
import { contractService } from '$lib/server/db/schema';
import { createInsertSchema } from 'drizzle-zod';
import type { InferModel } from 'drizzle-orm';

export type ContractService = InferModel<typeof contractService>;
export type NewContractService = InferModel<typeof contractService, 'insert'>;

export const insertContractServiceSchema = createInsertSchema(contractService);

export const createContractService = async (data: NewContractService) => {
	return await db.insert(contractService).values({
		contractId: data.contractId,
		serviceId: data.serviceId,
		salaryTypeId: data.salaryTypeId,
		categoryId: data.categoryId,
		contractEmployeeTypeId: data.contractEmployeeTypeId
	});
};

export const getAllContractServices = async () => {
	return await db.select().from(contractService);
};
