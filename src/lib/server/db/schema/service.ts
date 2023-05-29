import { mysqlTable, serial, varchar } from 'drizzle-orm/mysql-core';
import { relations } from 'drizzle-orm';
import { ContractService } from './contractService';

export const Service = mysqlTable('Service', {
	id: serial('id').primaryKey(),
	name: varchar('name', { length: 191 }).notNull()
});

export const ServiceRelations = relations(Service, ({ many }) => ({
	ContractService: many(ContractService)
}));
