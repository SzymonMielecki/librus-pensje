import { db } from '../db';
import type { InferModel } from 'drizzle-orm';
import { contractType } from '$lib/server/db/schema';
import { createInsertSchema } from 'drizzle-zod';
import { eq } from 'drizzle-orm';

export type ContractType = InferModel<typeof contractType>;
export type NewContractType = InferModel<typeof contractType, 'insert'>;

export const insertContractTypeSchema = createInsertSchema(contractType);

export const createContractType = async (data: NewContractType) => {
	return await db.insert(contractType).values(data);
};

export const getAllContractTypes = async () => {
	return await db.query.contractType.findMany();
};

export const getContractTypeUOP = async () => {
	return await db.query.contractType.findFirst({ where: eq(contractType.name, 'Umowa o pracę') });
};
