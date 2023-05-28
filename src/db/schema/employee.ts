import { mysqlTable, varchar } from 'drizzle-orm/mysql-core';
import { relations, type InferModel } from 'drizzle-orm';
import { contract } from './contract';

export const employee = mysqlTable('Employee', {
	id: varchar('id', { length: 191 }).primaryKey().notNull(),
	name: varchar('name', { length: 191 }).notNull()
});

export const employeeRelations = relations(employee, ({ many }) => ({
	contract: many(contract)
}));

export type Employee = InferModel<typeof employee>;
export type NewEmployee = InferModel<typeof employee, 'insert'>;
