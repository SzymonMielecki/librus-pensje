<script lang="ts">
	import { goto } from '$app/navigation';
	import Popover from '$lib/ui/popover.svelte';
	import { Edit, MoreHorizontal, Plus, Trash2 } from 'lucide-svelte'
	import { tippy } from 'svelte-tippy';
	export let data;
	const monthList = [9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8];
	// let contractServices = contract?.contractService ? contract?.contractService : [];
	let thisContract = data.contract;
	console.log(thisContract);
	
</script>

<div class="grid place-content-center h-full w-full">
	<div class="grid h-full p-6 gap-8 border-subtle rounded-3xl border">
		{#if thisContract}
		<div class="flex flex-row place-content-between">
			<h1 class="text-lg">
				Umowa numer {thisContract.number} dla {thisContract.employee.name}
			</h1>
			<!-- <a href="/addContractService?contractId={thisContract.Contract.id}" class="btn btn-ghost">
				<Plus/>
				Dodaj usługi do umowy
			</a> -->
			<Popover>
					<button
						slot="button"
						let:button
						use:button
						class="btn btn-ghost p-2 h-fit"
						use:tippy={{ content: 'View Actions' }}
						on:click|stopPropagation
					>
						<MoreHorizontal size={20} />
					</button>
					<ul slot="panel" class="w-60 divide-y divide-base-200 dark:divide-base-900">
						<li class="px-1 py-1">
							<a href='/addContractService?contractId={thisContract.id}' class="btn btn-ghost w-full justify-start">
								<Plus size={20} class="mr-2" />
								Dodaj usługę do umowy
							</a>
						</li>
						<li class="px-1 py-1">
							<form
							action="?/deleteContract&id={thisContract.id}"
							method="POST"
							name="deleteForm">
							
								<button
									class="btn btn-ghost w-full justify-start"
								>
									<Trash2 size={20} class="mr-2" />
									Usuń umowę
								</button>
							</form>
						</li>
					</ul>
				</Popover>
		</div>
		<table class="table">
			<thead>
				<tr>
					<th />
					<th>Przedmiot</th>
					<th>Stawka</th>
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
				{#if thisContract}
					{#each thisContract.contractService as contractService}
						<tr>
							<td>Ilośc godzin</td>
							<td>{contractService.service.name}</td>
							<td>{contractService.salary}</td>
							{#each monthList as month}
								<td>{contractService.hoursMonths.find((element) => element.month === Number(month))?.hoursWorked}</td>
								<!-- <td>{contractService.hoursMonths}</td> -->
							{/each}
						</tr>
					{/each}	
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
