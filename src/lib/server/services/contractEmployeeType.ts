import { db } from '../db';
import type { InferModel } from 'drizzle-orm';
import { contractEmployeeType } from '$lib/server/db/schema';
import { createInsertSchema } from 'drizzle-zod';

export type ContractEmployeeType = InferModel<typeof contractEmployeeType>;
export type NewContractEmployeeType = InferModel<typeof contractEmployeeType, 'insert'>;

export const insertContractEmployeeTypeSchema = createInsertSchema(contractEmployeeType);

export const createContractEmployeeType = async (data: NewContractEmployeeType) => {
	return await db.insert(contractEmployeeType).values(data);
};

export const getAllContractEmployeeTypes = async () => {
	return await db.select().from(contractEmployeeType);
};
