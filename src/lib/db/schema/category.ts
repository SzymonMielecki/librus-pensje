import { mysqlTable, varchar } from 'drizzle-orm/mysql-core';
import { relations, type InferModel } from 'drizzle-orm';
import { contractService } from './contractService';

export const category = mysqlTable('Category', {
	id: varchar('id', { length: 191 }).primaryKey().notNull(),
	name: varchar('name', { length: 191 }).notNull()
});

export const categoryRelations = relations(category, ({ many }) => ({
	contractService: many(contractService)
}));

export type Category = InferModel<typeof category>;
export type NewCategory = InferModel<typeof category, 'insert'>;
