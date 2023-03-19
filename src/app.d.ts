import type { PrismaClient } from '@prisma/client';

declare global {
	namespace App {
		// interface Locals {}
		// interface PageData {}
		// interface Error {}
		// interface Platform {}
	}
	var prisma: PrismaClient;
}
export {};
