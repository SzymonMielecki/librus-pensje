import { db } from '../../../db/db';
import { eq } from 'drizzle-orm';
import { category } from '../schema';

export function getAllCategories() {
	return db.query.category.findMany();
}

export function getCategoryById(id: string) {
	return db.query.category.findFirst({
		where: eq(category.id, id)
	});
}

export function createCategory(data: any) {
	db.insert(category).values(data).execute();
}
