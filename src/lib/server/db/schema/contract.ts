// import { db } from '$lib/server/db';
import { mysqlTable, varchar, double, serial } from 'drizzle-orm/mysql-core';
import { relations, type InferModel } from 'drizzle-orm';
import { ContractService } from './contractService';
import { Employee } from './employee';
import { ContractType } from './contractType';
import { SalaryType } from './salaryType';

export const Contract = mysqlTable('Contract', {
	id: serial('id').primaryKey(),
	number: varchar('number', { length: 191 }).notNull(),
	fixedSalary: double('fixedSalary'),
	employeeId: varchar('employeeId', { length: 191 }).notNull(),
	contractTypeId: varchar('contractTypeId', { length: 191 }).notNull(),
	salaryTypeId: varchar('salaryTypeId', { length: 191 })
});

export const ContractRelations = relations(Contract, ({ one, many }) => ({
	ContractService: many(ContractService),
	Employee: one(Employee, { fields: [Contract.employeeId], references: [Employee.id] }),
	ContractType: one(ContractType, {
		fields: [Contract.contractTypeId],
		references: [ContractType.id]
	}),
	SalaryType: one(SalaryType, { fields: [Contract.salaryTypeId], references: [SalaryType.id] })
}));

// export const getAllContracts = async () => {
// 	return db.query.Contract.findMany();
// };
