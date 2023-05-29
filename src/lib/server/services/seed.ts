import { db } from '../db';
import { ContractType, SalaryType } from '$lib/server/db/schema';

const premadeContractTypes = [
	{ name: 'Umowa o pracę' },
	{ name: 'Umowa zlecenie' },
	{ name: 'Umowa o dzieło' },
	{ name: 'B2B' }
];

const premadeSalaryTypes = [{ name: 'Netto' }, { name: 'Brutto' }];

export const seed = async () => {
	await db.insert(ContractType).values(premadeContractTypes);
	await db.insert(SalaryType).values(premadeSalaryTypes);
};
