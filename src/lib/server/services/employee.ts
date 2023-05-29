import { db } from '../db';
import type { InferModel } from 'drizzle-orm';
import { Employee } from '$lib/server/db/schema';
import { createInsertSchema } from 'drizzle-zod';

export type Employee = InferModel<typeof Employee>;
export type NewEmployee = InferModel<typeof Employee, 'insert'>;

export const insertEmployeeSchema = createInsertSchema(Employee);

export const createEmployee = async (data: NewEmployee) => {
	return await db.insert(Employee).values(data);
};

export const getAllEmployees = async () => {
	return await db.select().from(Employee);
	// return await db.query.Employee.findMany();
};
