import { prisma } from '$lib/server/prisma';

export const seed = async () => {
	const contractTypes = await prisma.contractType.createMany({
		data: [
			{
				name: 'Umowa o pracę'
			},
			{
				name: 'Umowa zlecenie'
			},
			{
				name: 'Umowa o dzieło'
			}
		],
		skipDuplicates: true
	});
	const salaryTypes = await prisma.salaryType.createMany({
		data: [
			{
				name: 'Netto'
			},
			{
				name: 'Brutto'
			}
		],
		skipDuplicates: true
	});
	const contractEmployeeTypes = await prisma.contractEmployeeType.createMany({
		data: [
			{
				name: 'Nauczyciel przedmiotu zawodowego'
			},
			{
				name: 'Nauczyciel przedmiotu ogólnego'
			},
			{
				name: 'Nauczyciel przedmiotu rozszerzonego'
			}
		],
		skipDuplicates: true
	});

	return {
		contractTypes,
		salaryTypes,
		contractEmployeeTypes
	};
};
