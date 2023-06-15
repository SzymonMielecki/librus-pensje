import { mysqlTable, serial, uniqueIndex, varchar } from 'drizzle-orm/mysql-core';
import { relations } from 'drizzle-orm';
import { contractService, contract } from './';

export const salaryType = mysqlTable(
	'salaryType',
	{
		id: serial('id').primaryKey(),
		name: varchar('name', { length: 191 }).notNull()
	},
	(salaryType) => {
		return {
			nameIdx: uniqueIndex('name_idx').on(salaryType.name)
		};
	}
);

export const salaryTypeRelations = relations(salaryType, ({ many }) => ({
	contractService: many(contractService),
	contract: many(contract)
}));
