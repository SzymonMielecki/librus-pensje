import { mysqlTable, varchar } from 'drizzle-orm/mysql-core';
import { relations, type InferModel } from 'drizzle-orm';
import { contractService } from './contractService';

export const contractEmployeeType = mysqlTable('ContractEmployeeType', {
	id: varchar('id', { length: 191 }).primaryKey().notNull(),
	name: varchar('name', { length: 191 }).notNull()
});

export const contractEmployeeTypeRelations = relations(contractEmployeeType, ({ many }) => ({
	contractService: many(contractService)
}));

export type ContractEmployeeType = InferModel<typeof contractEmployeeType>;
export type NewContractEmployeeType = InferModel<typeof contractEmployeeType, 'insert'>;
