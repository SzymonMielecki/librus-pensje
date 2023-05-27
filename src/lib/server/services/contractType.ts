import { prisma } from '$lib/server/prisma';
import type { Prisma } from '@prisma/client';

export function getAllContractTypes() {
	return prisma.contractType.findMany();
}

export function getContractTypeById(id: string) {
	return prisma.contractType.findUnique({
		where: { id: id }
	});
}

export function createContractType(data: Prisma.ContractTypeCreateArgs['data']) {
	return prisma.contractType.create({
		data: data
	});
}
