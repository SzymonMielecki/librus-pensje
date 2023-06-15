import { db } from '../db';
import { eq, type InferModel } from 'drizzle-orm';
import { contract } from '$lib/server/db/schema';
import { createInsertSchema } from 'drizzle-zod';

export type Contract = InferModel<typeof contract>;
export type NewContract = InferModel<typeof contract, 'insert'>;

export const insertContractSchema = createInsertSchema(contract);

export const getAllContracts = async () => {
	return await db.query.contract.findMany({
		with: {
			employee: true,
			contractType: true,
			salaryType: true,
			contractService: {
				with: {
					service: true,
					salaryType: true,
					category: true,
					contractEmployeeType: true,
					hoursMonths: true
				}
			}
		}
	});
};

export const createContract = async (data: NewContract) => {
	return await db.insert(contract).values(data);
};

export const getContractWhereId = async (id: number) => {
	return await db.query.contract.findFirst({
		where: eq(contract.id, id),
		with: {
			employee: true,
			contractType: true,
			salaryType: true,
			contractService: {
				with: {
					service: true,
					salaryType: true,
					category: true,
					contractEmployeeType: true,
					hoursMonths: true
				}
			}
		}
	});
};

export const deleteContract = async (id: number) => {
	return await db.delete(contract).where(eq(contract.id, id));
};
