import { db } from '../db';
import { eq, type InferModel } from 'drizzle-orm';
import {
	Contract,
	ContractService,
	ContractType,
	Employee,
	SalaryType
} from '$lib/server/db/schema/';
import { createInsertSchema } from 'drizzle-zod';

export type Contract = InferModel<typeof Contract>;
export type NewContract = InferModel<typeof Contract, 'insert'>;

export const insertContractSchema = createInsertSchema(Contract);

export const getAllContracts = async () => {
	return await db
		.select()
		.from(Contract)
		.leftJoin(Employee, eq(Contract.employeeId, Employee.id))
		.leftJoin(ContractType, eq(Contract.contractTypeId, ContractType.id))
		.leftJoin(SalaryType, eq(Contract.salaryTypeId, SalaryType.id));
};

export const createContract = async (data: NewContract) => {
	return await db.insert(Contract).values(data);
};

export const getContractWhereId = async (id: number) => {
	const contractWhereId = await db
		.select()
		.from(Contract)
		.where(eq(Contract.id, id))
		.leftJoin(Employee, eq(Contract.employeeId, Employee.id))
		.leftJoin(ContractType, eq(Contract.contractTypeId, ContractType.id))
		.leftJoin(SalaryType, eq(Contract.salaryTypeId, SalaryType.id))
		.leftJoin(ContractService, eq(Contract.id, ContractService.contractId));
	console.log('contractWhereId', contractWhereId[0]);
	return contractWhereId[0];
};
