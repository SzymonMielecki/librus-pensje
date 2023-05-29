import {
	Category,
	CategoryRelations,
	Contract,
	ContractEmployeeType,
	ContractEmployeeTypeRelations,
	ContractRelations,
	ContractService,
	ContractServiceRelations,
	ContractType,
	ContractTypeRelations,
	Employee,
	EmployeeRelations,
	HoursMonths,
	SalaryType,
	SalaryTypeRelations,
	Service,
	ServiceRelations
} from '$lib/server/db/schema/';
import { drizzle } from 'drizzle-orm/mysql2';
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
import { HoursMonthsRelations } from './schema/hoursMonths';
dotenv.config();

const connection = await mysql.createConnection({
	host: process.env.DATABASE_HOST,
	user: process.env.DATABASE_USER,
	password: process.env.DATABASE_PASSWORD,
	database: process.env.DATABASE_NAME
});

const schema = {
	...Category,
	...CategoryRelations,
	...Contract,
	...ContractRelations,
	...ContractEmployeeType,
	...ContractEmployeeTypeRelations,
	...ContractService,
	...ContractServiceRelations,
	...ContractType,
	...ContractTypeRelations,
	...Employee,
	...EmployeeRelations,
	...HoursMonths,
	...HoursMonthsRelations,
	...SalaryType,
	...SalaryTypeRelations,
	...Service,
	...ServiceRelations
};

export const db = drizzle(connection, { schema: schema });
