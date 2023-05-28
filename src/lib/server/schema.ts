import { mysqlTable, varchar, double, int } from 'drizzle-orm/mysql-core';
import { relations } from 'drizzle-orm';

// ---

export const category = mysqlTable('Category', {
	id: varchar('id', { length: 191 }).primaryKey().notNull(),
	name: varchar('name', { length: 191 }).notNull()
});

export const categoryRelations = relations(category, ({ many }) => ({
	contractService: many(contractService)
}));

// ---

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

// ---

export const contractEmployeeType = mysqlTable('ContractEmployeeType', {
	id: varchar('id', { length: 191 }).primaryKey().notNull(),
	name: varchar('name', { length: 191 }).notNull()
});

export const contractEmployeeTypeRelations = relations(contractEmployeeType, ({ many }) => ({
	contractService: many(contractService)
}));

// ---

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

// ---

export const contractType = mysqlTable('ContractType', {
	id: varchar('id', { length: 191 }).primaryKey().notNull(),
	name: varchar('name', { length: 191 }).notNull()
});

export const contractTypeRelations = relations(contractType, ({ many }) => ({
	contractService: many(contractService)
}));

// ---

export const employee = mysqlTable('Employee', {
	id: varchar('id', { length: 191 }).primaryKey().notNull(),
	name: varchar('name', { length: 191 }).notNull()
});

export const employeeRelations = relations(employee, ({ many }) => ({
	contract: many(contract)
}));

// ---

export const hoursMonths = mysqlTable('HoursMonths', {
	id: varchar('id', { length: 191 }).primaryKey().notNull(),
	month: int('month').notNull(),
	hoursWorked: int('hoursWorked')
});

// ---

export const salaryType = mysqlTable('SalaryType', {
	id: varchar('id', { length: 191 }).primaryKey().notNull(),
	name: varchar('name', { length: 191 }).notNull()
});

export const salaryTypeRelations = relations(salaryType, ({ many }) => ({
	contractService: many(contractService),
	contract: many(contract)
}));

// ---

export const service = mysqlTable('Service', {
	id: varchar('id', { length: 191 }).primaryKey().notNull(),
	name: varchar('name', { length: 191 }).notNull()
});

export const serviceRelations = relations(service, ({ many }) => ({
	contractService: many(contractService)
}));
