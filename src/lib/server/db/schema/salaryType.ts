import { mysqlTable, serial, uniqueIndex, varchar } from 'drizzle-orm/mysql-core';
import { relations } from 'drizzle-orm';
import { ContractService } from './contractService';
import { Contract } from './contract';

export const SalaryType = mysqlTable(
	'SalaryType',
	{
		id: serial('id').primaryKey(),
		name: varchar('name', { length: 191 }).notNull()
	},
	(SalaryType) => {
		return {
			nameIdx: uniqueIndex('name_idx').on(SalaryType.name)
		};
	}
);

export const SalaryTypeRelations = relations(SalaryType, ({ many }) => ({
	contractService: many(ContractService),
	contract: many(Contract)
}));
