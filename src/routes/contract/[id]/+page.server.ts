import { prisma } from '$lib/server/prisma';

export const load = async ({ params }) => {
	const thisContractId: string = params.id;
	const thisContract = await prisma.contract.findUnique({
		where: {
			id: thisContractId
		},
		include: {
			employee: true,
			contractType: true,
			salaryType: true,
			contractService: {
				include: {
					service: true,
					salaryType: true,
					contractEmployeeType: true,
					hoursMonths: true
				}
			}
		}
	});
	return {
		contract: thisContract
	};
};
