import { prisma } from '$lib/server/prisma';
import type { Prisma } from '@prisma/client';

export function getAllContracts() {
	return prisma.contract.findMany();
}

export function getContractById(id: string) {
	return prisma.contract.findUnique({
		where: { id: id }
	});
}

export function createContract(data: Prisma.ContractCreateArgs['data']) {
	return prisma.contract.create({
		data: data
	});
}
