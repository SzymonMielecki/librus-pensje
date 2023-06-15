import { mysqlTable, serial, uniqueIndex, varchar } from 'drizzle-orm/mysql-core';
import { relations } from 'drizzle-orm';
import { contractService } from './';

export const contractEmployeeType = mysqlTable(
	'contractEmployeeType',
	{
		id: serial('id').primaryKey(),
		name: varchar('name', { length: 191 }).notNull()
	},
	(contractEmployeeType) => {
		return {
			nameIdx: uniqueIndex('name_idx').on(contractEmployeeType.name)
		};
	}
);

export const contractEmployeeTypeRelations = relations(contractEmployeeType, ({ many }) => ({
	contractService: many(contractService)
}));
