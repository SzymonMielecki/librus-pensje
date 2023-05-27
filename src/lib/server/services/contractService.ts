import { prisma } from '$lib/server/prisma';
import type { Prisma } from '@prisma/client';

const hoursMonths = [
	{ month: 1, hoursWorked: 0 },
	{ month: 2, hoursWorked: 0 },
	{ month: 3, hoursWorked: 0 },
	{ month: 4, hoursWorked: 0 },
	{ month: 5, hoursWorked: 0 },
	{ month: 6, hoursWorked: 0 },
	{ month: 7, hoursWorked: 0 },
	{ month: 8, hoursWorked: 0 },
	{ month: 9, hoursWorked: 0 },
	{ month: 10, hoursWorked: 0 },
	{ month: 11, hoursWorked: 0 },
	{ month: 12, hoursWorked: 0 }
];

export function getAllContractServices() {
	return prisma.contractService.findMany();
}

export function getContractServiceById(id: string) {
	return prisma.contractService.findUnique({
		where: { id: id }
	});
}

export function createContractService(data: Prisma.ContractServiceCreateArgs['data']) {
	return prisma.contractService.create({
		data: {
			contractId: data.contractId,
			serviceId: data.serviceId,
			salary: data.salary,
			salaryTypeId: data.salaryTypeId,
			categoryId: data.categoryId,
			contractEmployeeTypeId: data.contractEmployeeTypeId,
			hoursMonths: {
				createMany: {
					data: hoursMonths
				}
			}
		}
	});
}
