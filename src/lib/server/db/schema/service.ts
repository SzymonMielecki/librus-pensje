import { mysqlTable, serial, varchar } from 'drizzle-orm/mysql-core';
import { relations, type InferModel } from 'drizzle-orm';
import { ContractService } from './contractService';

export const Service = mysqlTable('Service', {
	id: serial('id').primaryKey(),
	name: varchar('name', { length: 191 }).notNull()
});

export const ServiceRelations = relations(Service, ({ many }) => ({
	ContractService: many(ContractService)
}));

export type Service = InferModel<typeof Service>;
export type NewService = InferModel<typeof Service, 'insert'>;
