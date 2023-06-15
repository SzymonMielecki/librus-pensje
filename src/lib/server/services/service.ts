import { db } from '../db';
import type { InferModel } from 'drizzle-orm';
import { service } from '$lib/server/db/schema/';
import { createInsertSchema } from 'drizzle-zod';

export type Service = InferModel<typeof service>;
export type NewService = InferModel<typeof service, 'insert'>;

export const insertServiceSchema = createInsertSchema(service);

export const createService = async (data: NewService) => {
	return await db.insert(service).values(data);
};

export const getAllServices = async () => {
	return await db.query.service.findMany({});
};
