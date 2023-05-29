import { db } from '../db';
import type { InferModel } from 'drizzle-orm';
import { Category } from '$lib/server/db/schema/category';
import { createInsertSchema } from 'drizzle-zod';

export type Category = InferModel<typeof Category>;
export type NewCategory = InferModel<typeof Category, 'insert'>;

export const insertCategorySchema = createInsertSchema(Category);

export const createCategory = async (data: NewCategory) => {
	return db.insert(Category).values(data);
};
