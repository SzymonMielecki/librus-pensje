import { db } from '../db';
import type { InferModel } from 'drizzle-orm';
import { ContractService } from '$lib/server/db/schema';
import { createInsertSchema } from 'drizzle-zod';

export type ContractService = InferModel<typeof ContractService>;
export type NewContractService = InferModel<typeof ContractService, 'insert'>;

export const insertContractServiceSchema = createInsertSchema(ContractService);

export const createContractService = async (data: NewContractService) => {
	return await db.insert(ContractService).values(data);
};

export const getAllContractServices = async () => {
	return await db.select().from(ContractService);
};
