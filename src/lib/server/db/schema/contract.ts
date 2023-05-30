import { mysqlTable, varchar, double, serial, uniqueIndex, int } from 'drizzle-orm/mysql-core';
import { relations } from 'drizzle-orm';
import { ContractService, Employee, ContractType, SalaryType } from './';

export const Contract = mysqlTable(
	'Contract',
	{
		id: serial('id').primaryKey(),
		number: varchar('number', { length: 191 }).notNull(),
		fixedSalary: double('fixedSalary'),
		employeeId: int('employeeId').notNull(),
		contractTypeId: int('contractTypeId').notNull(),
		salaryTypeId: int('salaryTypeId')
	},
	(Contract) => {
		return {
			numberIdx: uniqueIndex('number_idx').on(Contract.number)
		};
	}
);

export const ContractRelations = relations(Contract, ({ one, many }) => ({
	ContractService: many(ContractService),
	Employee: one(Employee, { fields: [Contract.employeeId], references: [Employee.id] }),
	ContractType: one(ContractType, {
		fields: [Contract.contractTypeId],
		references: [ContractType.id]
	}),
	SalaryType: one(SalaryType, { fields: [Contract.salaryTypeId], references: [SalaryType.id] })
}));
