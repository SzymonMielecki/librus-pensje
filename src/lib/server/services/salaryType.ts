import { db } from '../db';
import type { InferModel } from 'drizzle-orm';
import { salaryType } from '$lib/server/db/schema';
import { createInsertSchema } from 'drizzle-zod';

export type SalaryType = InferModel<typeof salaryType>;
export type NewSalaryType = InferModel<typeof salaryType, 'insert'>;

export const insertSalaryTypeSchema = createInsertSchema(salaryType);

export const createSalaryType = async (data: NewSalaryType) => {
	return await db.insert(salaryType).values(data);
};

export const getAllSalaryTypes = async () => {
	return await db.select().from(salaryType);
};
