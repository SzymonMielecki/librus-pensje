import { mysqlTable, serial, varchar } from 'drizzle-orm/mysql-core';
import { relations } from 'drizzle-orm';
import { ContractService } from './contractService';

export const ContractEmployeeType = mysqlTable('ContractEmployeeType', {
	id: serial('id').primaryKey(),
	name: varchar('name', { length: 191 }).notNull()
});

export const ContractEmployeeTypeRelations = relations(ContractEmployeeType, ({ many }) => ({
	ContractService: many(ContractService)
}));
