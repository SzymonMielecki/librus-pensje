import { prisma } from '$lib/server/prisma';
import type { Prisma } from '@prisma/client';

export function getAllCategories() {
	return prisma.category.findMany();
}

export function getCategoryById(id: string) {
	return prisma.category.findUnique({
		where: { id: id }
	});
}

export function createCategory(data: Prisma.CategoryCreateArgs['data']) {
	return prisma.category.create({
		data: data
	});
}
