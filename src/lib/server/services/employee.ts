import { db } from '../db';
import type { InferModel } from 'drizzle-orm';
import { Employee } from '$lib/server/db/schema/employee';
import { createInsertSchema } from 'drizzle-zod';

export type Employee = InferModel<typeof Employee>;
export type NewEmployee = InferModel<typeof Employee, 'insert'>;

export const insertEmployeeSchema = createInsertSchema(Employee);

export const createEmployee = async (data: NewEmployee) => {
	return db.insert(Employee).values(data);
};

export const getAllEmployees = async () => {
	return db.query.Employee.findMany();
};
