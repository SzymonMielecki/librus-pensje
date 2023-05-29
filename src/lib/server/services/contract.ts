import { db } from '../db';
import { eq, type InferModel } from 'drizzle-orm';
import { Contract } from '$lib/server/db/schema/';
import { createInsertSchema } from 'drizzle-zod';

export type Contract = InferModel<typeof Contract>;
export type NewContract = InferModel<typeof Contract, 'insert'>;

export const insertContractSchema = createInsertSchema(Contract);

export const getAllContracts = async () => {
	return await db.select().from(Contract);
};

export const createContract = async (data: NewContract) => {
	return await db.insert(Contract).values(data);
};

export const getContractWhereId = async (id: number) => {
	return await db.select().from(Contract).where(eq(Contract.id, id))[0];
};
