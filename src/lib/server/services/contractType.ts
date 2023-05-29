import { db } from '../db';
import type { InferModel } from 'drizzle-orm';
import { ContractType } from '$lib/server/db/schema/contractType';
import { createInsertSchema } from 'drizzle-zod';
import { eq } from 'drizzle-orm';

export type ContractType = InferModel<typeof ContractType>;
export type NewContractType = InferModel<typeof ContractType, 'insert'>;

export const insertContractTypeSchema = createInsertSchema(ContractType);

export const createContractType = async (data: NewContractType) => {
	return await db.insert(ContractType).values(data);
};

export const getAllContractTypes = async () => {
	return await db.select().from(ContractType);
};

export const getContractTypeUOP = async () => {
	return await db.select().from(ContractType).where(eq(ContractType.name, 'Umowa o pracę'));
};
