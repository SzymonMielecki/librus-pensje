import { mysqlTable, double, serial, int } from 'drizzle-orm/mysql-core';
import { relations } from 'drizzle-orm';
import { contract, service, salaryType, category, contractEmployeeType, hoursMonths } from './';

export const contractService = mysqlTable('contractService', {
	id: serial('id').primaryKey(),
	salary: double('salary'),
	contractId: int('contractId').notNull(),
	serviceId: int('serviceId').notNull(),
	salaryTypeId: int('salaryTypeId'),
	categoryId: int('categoryId').notNull(),
	contractEmployeeTypeId: int('contractEmployeeTypeId').notNull()
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
