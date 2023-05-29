import type { InferModel } from 'drizzle-orm';
import { mysqlTable, varchar, int } from 'drizzle-orm/mysql-core';

export const hoursMonths = mysqlTable('HoursMonths', {
	id: varchar('id', { length: 191 }).primaryKey().notNull(),
	month: int('month').notNull(),
	hoursWorked: int('hoursWorked')
});

export type HoursMonths = InferModel<typeof hoursMonths>;
export type NewHoursMonths = InferModel<typeof hoursMonths, 'insert'>;
