<script lang="ts">
	import { Plus } from 'lucide-svelte'
	export let data;
	const monthList = [9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8];
	$: ({ contract } = data);
	let contractServices = contract?.contractService ? contract?.contractService : [];
	console.log(contractServices[0])
</script>

<div class="p-4 flex justify-center items-center flex-col w-full gap-4 h-full overflow-auto">
	<div class="w-full border border-subtle rounded-3xl overflow-hidden">
		{#if contract}
		<h1>
			Umowa numer {contract.number} dla {contract.employee.name}
		</h1>
		<a href="/addcontractService?contractId={contract.id}">
			<Plus/>
			Dodaj usługi do umowy
		</a>
		<table class="table">
			<thead>
				<tr>
					<th />
					<th>Przedmiot</th>
					<th>Wrzesień</th>
					<th>Październik</th>
					<th>Listopad</th>
					<th>Grudzień</th>
					<th>Styczeń</th>
					<th>Luty</th>
					<th>Marzec</th>
					<th>Kwiecień</th>
					<th>Maj</th>
					<th>Czerwiec</th>
					<th>Lipiec</th>
					<th>Sierpień</th>
				</tr>
			</thead>
			<tbody>
				{#each contract.contractService as contractService}
					
					<tr>
						<td>Wynagrodzenie/Ilośc godzin</td>
						<td>{contractService.service.name}</td>
						{#each monthList as month}
							<td
								>{Number(
									contractService.hoursMonths.find(
										(element) => element.month === Number(month)
									)?.hoursWorked
								) * Number(contractService.salary)}/{Number(
									contractService.hoursMonths.find(
										(element) => element.month === Number(month)
									)?.hoursWorked
								)}</td
							>
						{/each}
					</tr>
				{/each}
			</tbody>
		</table>
		{/if}
	</div>
</div>
