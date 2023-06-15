import { contractService } from './';
import { relations, type InferModel } from 'drizzle-orm';
import { mysqlTable, int, serial } from 'drizzle-orm/mysql-core';

export const hoursMonths = mysqlTable('hoursMonths', {
	id: serial('id').primaryKey(),
	contractServiceId: int('contractServiceId').notNull(),
	month: int('month').notNull(),
	hoursWorked: int('hoursWorked')
});

export const hoursMonthsRelations = relations(hoursMonths, ({ one }) => ({
	contractService: one(contractService, {
		fields: [hoursMonths.contractServiceId],
		references: [contractService.id]
	})
}));

export type HoursMonths = InferModel<typeof hoursMonths>;
export type NewHoursMonths = InferModel<typeof hoursMonths, 'insert'>;
