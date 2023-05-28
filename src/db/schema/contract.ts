import { mysqlTable, varchar, double } from 'drizzle-orm/mysql-core';
import { relations, type InferModel } from 'drizzle-orm';
import { contractService } from './contractService';
import { employee } from './employee';
import { contractType } from './contractType';
import { salaryType } from './salaryType';

export const contract = mysqlTable('Contract', {
	id: varchar('id', { length: 191 }).primaryKey().notNull(),
	number: varchar('number', { length: 191 }).notNull(),
	fixedSalary: double('fixedSalary'),
	employeeId: varchar('employeeId', { length: 191 }).notNull(),
	contractTypeId: varchar('contractTypeId', { length: 191 }).notNull(),
	salaryTypeId: varchar('salaryTypeId', { length: 191 })
});

export const contractRelations = relations(contract, ({ one, many }) => ({
	contractService: many(contractService),
	employee: one(employee, { fields: [contract.employeeId], references: [employee.id] }),
	contractType: one(contractType, {
		fields: [contract.contractTypeId],
		references: [contractType.id]
	}),
	salaryType: one(salaryType, { fields: [contract.salaryTypeId], references: [salaryType.id] })
}));

export type Contract = InferModel<typeof contract>;
export type NewContract = InferModel<typeof contract, 'insert'>;
