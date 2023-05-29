import { mysqlTable, serial, uniqueIndex, varchar } from 'drizzle-orm/mysql-core';
import { relations } from 'drizzle-orm';
import { Contract } from './contract';

export const Employee = mysqlTable(
	'Employee',
	{
		id: serial('id').primaryKey(),
		name: varchar('name', { length: 191 }).notNull()
	},
	(Employee) => {
		return {
			nameIdx: uniqueIndex('name_idx').on(Employee.name)
		};
	}
);

export const EmployeeRelations = relations(Employee, ({ many }) => ({
	Contract: many(Contract)
}));
