import { mysqlTable, serial, uniqueIndex, varchar } from 'drizzle-orm/mysql-core';
import { relations } from 'drizzle-orm';
import { contractService } from './';

export const category = mysqlTable(
	'category',
	{
		id: serial('id').primaryKey(),
		name: varchar('name', { length: 191 }).notNull()
	},
	(category) => {
		return {
			nameIdx: uniqueIndex('name_idx').on(category.name)
		};
	}
);

export const categoryRelations = relations(category, ({ many }) => ({
	contractService: many(contractService)
}));
