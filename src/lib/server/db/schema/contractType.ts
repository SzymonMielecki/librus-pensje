import { mysqlTable, serial, uniqueIndex, varchar } from 'drizzle-orm/mysql-core';
import { relations } from 'drizzle-orm';
import { contract } from './';

export const contractType = mysqlTable(
	'contractType',
	{
		id: serial('id').primaryKey(),
		name: varchar('name', { length: 191 }).notNull()
	},
	(contractType) => {
		return {
			nameIdx: uniqueIndex('name_idx').on(contractType.name)
		};
	}
);

export const contractTypeRelations = relations(contractType, ({ many }) => ({
	contract: many(contract)
}));
