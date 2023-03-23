import type { PrismaClient } from '@prisma/client';

declare global {
	namespace App {
		// interface Locals {}
		// interface PageData {}
		// interface Error {}
		// interface Platform {}
	}
	var prisma: PrismaClient;
	declare type contract = {
		id: string;
		contractNumber: string;
		teacherName: string;
		subjectName: string;
		contractTypeName: string;
		hourlyRate: number;
		hoursWorked: number;
		month: number;
	};
}
export {};
