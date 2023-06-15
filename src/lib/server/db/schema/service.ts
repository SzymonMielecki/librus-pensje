import { mysqlTable, serial, uniqueIndex, varchar } from 'drizzle-orm/mysql-core';
import { relations } from 'drizzle-orm';
import { contractService } from './';

export const service = mysqlTable(
	'service',
	{
		id: serial('id').primaryKey(),
		name: varchar('name', { length: 191 }).notNull()
	},
	(service) => {
		return {
			nameIdx: uniqueIndex('name_idx').on(service.name)
		};
	}
);

export const serviceRelations = relations(service, ({ many }) => ({
	contractService: many(contractService)
}));
