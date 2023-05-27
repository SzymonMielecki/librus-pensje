import { prisma } from '$lib/server/prisma';
import type { Prisma } from '@prisma/client';

export function getAllService() {
	return prisma.service.findMany();
}

export function getServiceById(id: string) {
	return prisma.service.findUnique({
		where: { id: id }
	});
}

export function createService(data: Prisma.ServiceCreateArgs['data']) {
	return prisma.service.create({
		data: data
	});
}
