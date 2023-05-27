import { prisma } from '$lib/server/prisma';
import type { Prisma } from '@prisma/client';

export function getAllContractEmployeeType() {
	return prisma.contractEmployeeType.findMany();
}

export function getContractEmployeeTypeById(id: string) {
	return prisma.contractEmployeeType.findUnique({
		where: { id: id }
	});
}

export function createContractEmployeeType(data: Prisma.ContractEmployeeTypeCreateArgs['data']) {
	return prisma.contractEmployeeType.create({
		data: data
	});
}
