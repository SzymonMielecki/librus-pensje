import { db } from '../db';
import type { InferModel } from 'drizzle-orm';
import { Contract } from '$lib/server/db/schema/contract';
import { createInsertSchema } from 'drizzle-zod';

export type Contract = InferModel<typeof Contract>;
export type NewContract = InferModel<typeof Contract, 'insert'>;

export const insertContractSchema = createInsertSchema(Contract);

export const getAllContracts = async () => {
	return await db.query.Contract.findMany();
};

export const createContract = async (data: NewContract) => {
	return await db.insert(Contract).values(data);
};
