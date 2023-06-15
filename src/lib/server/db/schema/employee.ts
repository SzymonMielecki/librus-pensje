import { mysqlTable, serial, uniqueIndex, varchar } from 'drizzle-orm/mysql-core';
import { relations } from 'drizzle-orm';
import { contract } from './';

export const employee = mysqlTable(
	'employee',
	{
		id: serial('id').primaryKey(),
		name: varchar('name', { length: 191 }).notNull()
	},
	(employee) => {
		return {
			nameIdx: uniqueIndex('name_idx').on(employee.name)
		};
	}
);

export const employeeRelations = relations(employee, ({ many }) => ({
	contract: many(contract)
}));
