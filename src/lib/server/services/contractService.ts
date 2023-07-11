import { db } from '../db';
import { contractService, hoursMonths } from '$lib/server/db/schema';
import { createInsertSchema } from 'drizzle-zod';
import { eq, type InferModel } from 'drizzle-orm';

export type ContractService = InferModel<typeof contractService>;
export type NewContractService = InferModel<typeof contractService, 'insert'>;

export const insertContractServiceSchema = createInsertSchema(contractService);

const hoursMonthsContent = (contractServiceId: number) => {
	return [
		{
			contractServiceId: contractServiceId,
			month: 1,
			hoursWorked: 0
		},
		{
			contractServiceId: contractServiceId,
			month: 2,
			hoursWorked: 0
		},
		{
			contractServiceId: contractServiceId,
			month: 3,
			hoursWorked: 0
		},
		{
			contractServiceId: contractServiceId,
			month: 4,
			hoursWorked: 0
		},
		{
			contractServiceId: contractServiceId,
			month: 5,
			hoursWorked: 0
		},
		{
			contractServiceId: contractServiceId,
			month: 6,
			hoursWorked: 0
		},
		{
			contractServiceId: contractServiceId,
			month: 7,
			hoursWorked: 0
		},
		{
			contractServiceId: contractServiceId,
			month: 8,
			hoursWorked: 0
		},
		{
			contractServiceId: contractServiceId,
			month: 9,
			hoursWorked: 0
		},
		{
			contractServiceId: contractServiceId,
			month: 10,
			hoursWorked: 0
		},
		{
			contractServiceId: contractServiceId,
			month: 11,
			hoursWorked: 0
		},
		{
			contractServiceId: contractServiceId,
			month: 12,
			hoursWorked: 0
		}
	];
};

export const createContractService = async (data: NewContractService) => {
	await db.insert(contractService).values(data);
	const insertedContractService = await db.query.contractService.findFirst({
		where:
			eq(contractService.contractId, data.contractId) &&
			eq(contractService.serviceId, data.serviceId) &&
			eq(contractService.categoryId, data.categoryId) &&
			eq(contractService.contractEmployeeTypeId, data.contractEmployeeTypeId)
	});
	console.log(insertedContractService);
	insertedContractService
		? await db.insert(hoursMonths).values(hoursMonthsContent(insertedContractService.id))
		: null;
};

export const getAllContractServices = async () => {
	return await db.select().from(contractService);
};

export const getContractServiceWhereId = async (id: number) => {
	return await db.query.contractService.findFirst({
		where: eq(contractService.id, id)
	});
};

export const deleteContractService = async (id: number) => {
	const thisContractService = await getContractServiceWhereId(id);
	if (!thisContractService) return;
	await db.delete(hoursMonths).where(eq(hoursMonths.contractServiceId, id));
	return await db.delete(contractService).where(eq(contractService.id, id));
};
