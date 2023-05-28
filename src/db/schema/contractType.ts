import { mysqlTable, varchar } from 'drizzle-orm/mysql-core';
import { relations, type InferModel } from 'drizzle-orm';
import { contractService } from './contractService';

export const contractType = mysqlTable('ContractType', {
	id: varchar('id', { length: 191 }).primaryKey().notNull(),
	name: varchar('name', { length: 191 }).notNull()
});

export const contractTypeRelations = relations(contractType, ({ many }) => ({
	contractService: many(contractService)
}));

export type ContractType = InferModel<typeof contractType>;
export type NewContractType = InferModel<typeof contractType, 'insert'>;
