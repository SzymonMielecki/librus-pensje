import { db } from '../db';
import type { InferModel } from 'drizzle-orm';
import { employee } from '$lib/server/db/schema';
import { createInsertSchema } from 'drizzle-zod';

export type Employee = InferModel<typeof employee>;
export type NewEmployee = InferModel<typeof employee, 'insert'>;

export const insertEmployeeSchema = createInsertSchema(employee);

export const createEmployee = async (data: NewEmployee) => {
	return await db.insert(employee).values(data);
};

export const getAllEmployees = async () => {
	return await db.select().from(employee);
	// return await db.query.Employee.findMany();
};
