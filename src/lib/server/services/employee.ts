import { prisma } from '$lib/server/prisma';
import type { Prisma } from '@prisma/client';

export function getAllEmployees() {
	return prisma.employee.findMany();
}

export function getEmployeeById(id: string) {
	return prisma.employee.findUnique({
		where: { id: id }
	});
}

export function createEmployee(data: Prisma.EmployeeCreateArgs['data']) {
	return prisma.employee.create({
		data: data
	});
}
