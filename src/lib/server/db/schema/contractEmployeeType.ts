import { mysqlTable, serial, varchar } from 'drizzle-orm/mysql-core';
import { relations, type InferModel } from 'drizzle-orm';
import { ContractService } from './contractService';

export const ContractEmployeeType = mysqlTable('ContractEmployeeType', {
	id: serial('id').primaryKey(),
	name: varchar('name', { length: 191 }).notNull()
});

export const ContractEmployeeTypeRelations = relations(ContractEmployeeType, ({ many }) => ({
	ContractService: many(ContractService)
}));

export type ContractEmployeeType = InferModel<typeof ContractEmployeeType>;
export type NewContractEmployeeType = InferModel<typeof ContractEmployeeType, 'insert'>;
