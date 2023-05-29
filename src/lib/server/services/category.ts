import { db } from '../db';
import type { InferModel } from 'drizzle-orm';
import { Category } from '$lib/server/db/schema';
import { createInsertSchema } from 'drizzle-zod';

export type Category = InferModel<typeof Category>;
export type NewCategory = InferModel<typeof Category, 'insert'>;

export const insertCategorySchema = createInsertSchema(Category);

export const createCategory = async (data: NewCategory) => {
	return await db.insert(Category).values(data);
};

export const getAllCategories = async () => {
	return await db.select().from(Category);
};
