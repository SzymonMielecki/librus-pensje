import { mysqlTable, varchar, double } from 'drizzle-orm/mysql-core';
import { relations, type InferModel } from 'drizzle-orm';
import { contract } from './contract';
import { service } from './service';
import { salaryType } from './salaryType';
import { category } from './category';
import { contractEmployeeType } from './contractEmployeeType';
import { hoursMonths } from './hoursMonths';

export const contractService = mysqlTable('ContractService', {
	id: varchar('id', { length: 191 }).primaryKey().notNull(),
	salary: double('salary'),
	contractId: varchar('contractId', { length: 191 }).notNull(),
	serviceId: varchar('serviceId', { length: 191 }).notNull(),
	salaryTypeId: varchar('salaryTypeId', { length: 191 }),
	categoryId: varchar('categoryId', { length: 191 }).notNull(),
	contractEmployeeTypeId: varchar('contractEmployeeTypeId', { length: 191 }).notNull()
});

export const contractServiceRelations = relations(contractService, ({ one, many }) => ({
	contract: one(contract, { fields: [contractService.contractId], references: [contract.id] }),
	service: one(service, { fields: [contractService.serviceId], references: [service.id] }),
	salaryType: one(salaryType, {
		fields: [contractService.salaryTypeId],
		references: [salaryType.id]
	}),
	category: one(category, { fields: [contractService.categoryId], references: [category.id] }),
	contractEmployeeType: one(contractEmployeeType, {
		fields: [contractService.contractEmployeeTypeId],
		references: [contractEmployeeType.id]
	}),
	hoursMonths: many(hoursMonths)
}));

export type ContractService = InferModel<typeof contractService>;
export type NewContractService = InferModel<typeof contractService, 'insert'>;
