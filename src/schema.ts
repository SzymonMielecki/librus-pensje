import { mysqlTable, varchar, double, int } from 'drizzle-orm/mysql-core';
import { relations } from 'drizzle-orm';

// ---

export const category = mysqlTable('Category', {
	id: varchar('id', { length: 191 }).primaryKey().notNull(),
	name: varchar('name', { length: 191 }).notNull()
});

// ---

export const contract = mysqlTable('Contract', {
	id: varchar('id', { length: 191 }).primaryKey().notNull(),
	number: varchar('number', { length: 191 }).notNull(),
	fixedSalary: double('fixedSalary')
});

export const contractRelations = relations(contract, ({ many }) => ({
	employee: many(employee),
	contractType: many(contractType),
	salaryType: many(salaryType)
}));

// ---

export const contractEmployeeType = mysqlTable('ContractEmployeeType', {
	id: varchar('id', { length: 191 }).primaryKey().notNull(),
	name: varchar('name', { length: 191 }).notNull()
});

// ---

export const contractService = mysqlTable('ContractService', {
	id: varchar('id', { length: 191 }).primaryKey().notNull(),
	salary: double('salary')
});

export const contractServiceRelations = relations(contractService, ({ many }) => ({
	contract: many(contract),
	service: many(service),
	salaryType: many(salaryType),
	category: many(category),
	contractEmployeeType: many(contractEmployeeType)
}));

// ---

export const contractType = mysqlTable('ContractType', {
	id: varchar('id', { length: 191 }).primaryKey().notNull(),
	name: varchar('name', { length: 191 }).notNull()
});

// ---

export const employee = mysqlTable('Employee', {
	id: varchar('id', { length: 191 }).primaryKey().notNull(),
	name: varchar('name', { length: 191 }).notNull()
});

// ---

export const hoursMonths = mysqlTable('HoursMonths', {
	id: varchar('id', { length: 191 }).primaryKey().notNull(),
	month: int('month').notNull(),
	hoursWorked: int('hoursWorked')
});

export const hoursMonthsRelations = relations(hoursMonths, ({ many }) => ({
	contractService: many(contractService)
}));

// ---

export const salaryType = mysqlTable('SalaryType', {
	id: varchar('id', { length: 191 }).primaryKey().notNull(),
	name: varchar('name', { length: 191 }).notNull()
});

// ---

export const service = mysqlTable('Service', {
	id: varchar('id', { length: 191 }).primaryKey().notNull(),
	name: varchar('name', { length: 191 }).notNull()
});
