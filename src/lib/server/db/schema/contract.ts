import { mysqlTable, varchar, serial, uniqueIndex, int } from 'drizzle-orm/mysql-core';
import { relations } from 'drizzle-orm';
import { contractService, employee, contractType, salaryType } from './';

export const contract = mysqlTable(
	'contract',
	{
		id: serial('id').primaryKey(),
		number: varchar('number', { length: 191 }).notNull(),
		fixedSalary: int('fixedSalary'),
		employeeId: int('employeeId').notNull(),
		contractTypeId: int('contractTypeId').notNull(),
		salaryTypeId: int('salaryTypeId')
	},
	(contract) => {
		return {
			numberIdx: uniqueIndex('number_idx').on(contract.number)
		};
	}
);

export const contractRelations = relations(contract, ({ one, many }) => ({
	contractService: many(contractService),
	employee: one(employee, { fields: [contract.employeeId], references: [employee.id] }),
	contractType: one(contractType, {
		fields: [contract.contractTypeId],
		references: [contractType.id]
	}),
	salaryType: one(salaryType, { fields: [contract.salaryTypeId], references: [salaryType.id] })
}));
