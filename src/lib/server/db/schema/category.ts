import { mysqlTable, serial, varchar } from 'drizzle-orm/mysql-core';
import { relations } from 'drizzle-orm';
import { ContractService } from './contractService';

export const Category = mysqlTable('Category', {
	id: serial('id').primaryKey(),
	name: varchar('name', { length: 191 }).notNull()
});

export const CategoryRelations = relations(Category, ({ many }) => ({
	ContractService: many(ContractService)
}));
