import { mysqlTable, serial, uniqueIndex, varchar } from 'drizzle-orm/mysql-core';
import { relations } from 'drizzle-orm';
import { Contract } from './contract';

export const ContractType = mysqlTable(
	'ContractType',
	{
		id: serial('id').primaryKey(),
		name: varchar('name', { length: 191 }).notNull()
	},
	(ContractType) => {
		return {
			nameIdx: uniqueIndex('name_idx').on(ContractType.name)
		};
	}
);

export const ContractTypeRelations = relations(ContractType, ({ many }) => ({
	Contract: many(Contract)
}));
