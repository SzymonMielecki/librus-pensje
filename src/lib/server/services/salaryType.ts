import { db } from '../db';
import type { InferModel } from 'drizzle-orm';
import { SalaryType } from '$lib/server/db/schema';
import { createInsertSchema } from 'drizzle-zod';

export type SalaryType = InferModel<typeof SalaryType>;
export type NewSalaryType = InferModel<typeof SalaryType, 'insert'>;

export const insertSalaryTypeSchema = createInsertSchema(SalaryType);

export const createSalaryType = async (data: NewSalaryType) => {
	return await db.insert(SalaryType).values(data);
};

export const getAllSalaryTypes = async () => {
	return await db.select().from(SalaryType);
};
