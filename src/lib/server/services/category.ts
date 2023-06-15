import { db } from '../db';
import type { InferModel } from 'drizzle-orm';
import { category } from '$lib/server/db/schema';
import { createInsertSchema } from 'drizzle-zod';

export type Category = InferModel<typeof category>;
export type NewCategory = InferModel<typeof category, 'insert'>;

export const insertCategorySchema = createInsertSchema(category);

export const createCategory = async (data: NewCategory) => {
	return await db.insert(category).values(data);
};

export const getAllCategories = async () => {
	return await db.select().from(category);
};
