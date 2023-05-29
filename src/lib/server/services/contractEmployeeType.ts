import { db } from '../db';
import type { InferModel } from 'drizzle-orm';
import { ContractEmployeeType } from '$lib/server/db/schema';
import { createInsertSchema } from 'drizzle-zod';

export type ContractEmployeeType = InferModel<typeof ContractEmployeeType>;
export type NewContractEmployeeType = InferModel<typeof ContractEmployeeType, 'insert'>;

export const insertContractEmployeeTypeSchema = createInsertSchema(ContractEmployeeType);

export const createContractEmployeeType = async (data: NewContractEmployeeType) => {
	return await db.insert(ContractEmployeeType).values(data);
};

export const getAllContractEmployeeTypes = async () => {
	return await db.select().from(ContractEmployeeType);
};
