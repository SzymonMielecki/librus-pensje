import { mysqlTable, varchar, double, serial } from 'drizzle-orm/mysql-core';
import { relations, type InferModel } from 'drizzle-orm';
import { Contract } from './contract';
import { Service } from './service';
import { SalaryType } from './salaryType';
import { Category } from './category';
import { ContractEmployeeType } from './contractEmployeeType';
import { HoursMonths } from './hoursMonths';

export const ContractService = mysqlTable('ContractService', {
	id: serial('id').primaryKey(),
	salary: double('salary'),
	contractId: varchar('contractId', { length: 191 }).notNull(),
	serviceId: varchar('serviceId', { length: 191 }).notNull(),
	salaryTypeId: varchar('salaryTypeId', { length: 191 }),
	categoryId: varchar('categoryId', { length: 191 }).notNull(),
	contractEmployeeTypeId: varchar('contractEmployeeTypeId', { length: 191 }).notNull()
});

export const ContractServiceRelations = relations(ContractService, ({ one, many }) => ({
	contract: one(Contract, { fields: [ContractService.contractId], references: [Contract.id] }),
	service: one(Service, { fields: [ContractService.serviceId], references: [Service.id] }),
	salaryType: one(SalaryType, {
		fields: [ContractService.salaryTypeId],
		references: [SalaryType.id]
	}),
	category: one(Category, { fields: [ContractService.categoryId], references: [Category.id] }),
	contractEmployeeType: one(ContractEmployeeType, {
		fields: [ContractService.contractEmployeeTypeId],
		references: [ContractEmployeeType.id]
	}),
	hoursMonths: many(HoursMonths)
}));

export type ContractService = InferModel<typeof ContractService>;
export type NewContractService = InferModel<typeof ContractService, 'insert'>;
