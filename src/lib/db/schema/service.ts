import { mysqlTable, varchar } from 'drizzle-orm/mysql-core';
import { relations, type InferModel } from 'drizzle-orm';
import { contractService } from './contractService';

export const service = mysqlTable('Service', {
	id: varchar('id', { length: 191 }).primaryKey().notNull(),
	name: varchar('name', { length: 191 }).notNull()
});

export const serviceRelations = relations(service, ({ many }) => ({
	contractService: many(contractService)
}));

export type Service = InferModel<typeof service>;
export type NewService = InferModel<typeof service, 'insert'>;
