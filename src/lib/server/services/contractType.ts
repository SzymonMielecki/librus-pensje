import { db } from '../db';
import type { InferModel } from 'drizzle-orm';
import { ContractType } from '$lib/server/db/schema/contractType';
import { createInsertSchema } from 'drizzle-zod';
import { eq } from 'drizzle-orm';

export type ContractType = InferModel<typeof ContractType>;
export type NewContractType = InferModel<typeof ContractType, 'insert'>;

export const insertContractTypeSchema = createInsertSchema(ContractType);

export const createContractType = async (data: NewContractType) => {
	return db.insert(ContractType).values(data);
};

export const getAllContractTypes = async () => {
	return db.query.ContractType.findMany();
};

export const getContractTypeUOP = async () => {
	return db.query.ContractType.findFirst({
		where: eq(ContractType.name, 'Umowa o pracę')
	});
};
