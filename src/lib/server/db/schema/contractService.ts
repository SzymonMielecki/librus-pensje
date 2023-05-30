import { mysqlTable, double, serial, int } from 'drizzle-orm/mysql-core';
import { relations } from 'drizzle-orm';
import { Contract, Service, SalaryType, Category, ContractEmployeeType, HoursMonths } from './';

export const ContractService = mysqlTable('ContractService', {
	id: serial('id').primaryKey(),
	salary: double('salary'),
	contractId: int('contractId').notNull(),
	serviceId: int('serviceId').notNull(),
	salaryTypeId: int('salaryTypeId'),
	categoryId: int('categoryId').notNull(),
	contractEmployeeTypeId: int('contractEmployeeTypeId').notNull()
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
