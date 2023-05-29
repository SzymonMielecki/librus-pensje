import { ContractService } from './contractService';
import { relations, type InferModel } from 'drizzle-orm';
import { mysqlTable, int, serial } from 'drizzle-orm/mysql-core';

export const HoursMonths = mysqlTable('HoursMonths', {
	id: serial('id').primaryKey(),
	month: int('month').notNull(),
	hoursWorked: int('hoursWorked')
});

export const HoursMonthsRelations = relations(HoursMonths, ({ many }) => ({
	ContractService: many(ContractService)
}));

export type HoursMonths = InferModel<typeof HoursMonths>;
export type NewHoursMonths = InferModel<typeof HoursMonths, 'insert'>;
