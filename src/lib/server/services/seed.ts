import { db } from '../db';
import { contractType, salaryType } from '$lib/server/db/schema';

const premadeContractTypes = [
	{ name: 'Umowa o pracę' },
	{ name: 'Umowa zlecenie' },
	{ name: 'Umowa o dzieło' },
	{ name: 'B2B' }
];

const premadeSalaryTypes = [{ name: 'Netto' }, { name: 'Brutto' }];

export const seed = async () => {
	await db.insert(contractType).values(premadeContractTypes);
	await db.insert(salaryType).values(premadeSalaryTypes);
};
