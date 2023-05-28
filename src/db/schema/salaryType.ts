import { mysqlTable, varchar } from 'drizzle-orm/mysql-core';
import { relations, type InferModel } from 'drizzle-orm';
import { contractService } from './contractService';
import { contract } from './contract';

export const salaryType = mysqlTable('SalaryType', {
	id: varchar('id', { length: 191 }).primaryKey().notNull(),
	name: varchar('name', { length: 191 }).notNull()
});

export const salaryTypeRelations = relations(salaryType, ({ many }) => ({
	contractService: many(contractService),
	contract: many(contract)
}));

export type SalaryType = InferModel<typeof salaryType>;
export type NewSalaryType = InferModel<typeof salaryType, 'insert'>;
