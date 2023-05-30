<script lang="ts">
	import { Plus } from 'lucide-svelte'
	export let data;
	const monthList = [9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8];
	console.log(data)
	// let contractServices = contract?.contractService ? contract?.contractService : [];
	let thisContract = data.contract;
</script>

<div class="grid place-content-center h-full w-full">
	<div class="grid h-full p-6 gap-8 border-subtle rounded-3xl border">
		{#if thisContract}
		<div class="grid grid-cols-2">
			<h1 class="text-lg">
				Umowa numer {thisContract.Contract.number} dla {thisContract.Employee?.name}
			</h1>
			<a href="/addContractService?contractId={thisContract.Contract.id}" class="btn btn-ghost">
				<Plus/>
				Dodaj usługi do umowy
			</a>
		</div>
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
				{#if thisContract.ContractService}
					<!-- {#each thisContract.ContractService as ContractService} -->
						<!-- <tr>
							<td>Wynagrodzenie/Ilośc godzin</td>
							<td>{ContractService.service.name}</td>
							{#each monthList as month}
							<td>{Number(ContractService.hoursMonths.find((element) => element.month === Number(month))?.hoursWorked)}</td>
							{/each}
						</tr> -->
					<!-- {/each}	 -->
				{:else}
					<tr>
						<td colspan="14">Brak usług w umowie</td>
					</tr>
				{/if}
			</tbody>
		</table>
		{/if}
	</div>
</div>
