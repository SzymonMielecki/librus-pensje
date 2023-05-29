import { db } from '../db';
import type { InferModel } from 'drizzle-orm';
import { Service } from '$lib/server/db/schema/service';
import { createInsertSchema } from 'drizzle-zod';

export type Service = InferModel<typeof Service>;
export type NewService = InferModel<typeof Service, 'insert'>;

export const insertServiceSchema = createInsertSchema(Service);

export const createService = async (data: NewService) => {
	return await db.insert(Service).values(data);
};

export const getAllServices = async () => {
	return await db.select().from(Service);
};
