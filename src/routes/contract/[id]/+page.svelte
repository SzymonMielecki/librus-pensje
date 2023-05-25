<script lang="ts">
	import Table from '$lib/ui/table.svelte';
	export let data;
	const monthList = [9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8];
	$: ({ contract } = data);
	let contractServices = contract?.contractService ? contract?.contractService : [];
	console.log(contractServices[0])
	let items = Array.from({ length: 12 }, (_, i) => ({
		type: 'Wynagrodzenie/Ilośc godzin',
		lesson: 'Grafika',
		september: i + 1,
		october: i + 1,
		november: i + 1,
		december: i + 1,
		january: i + 1,
		february: i + 1,
		march: i + 1,
		april: i + 1,
		may: i + 1,
		june: i + 1,
		july: i + 1,
		august: i + 1
	}));
</script>

<div class="p-4 flex justify-center items-center flex-col w-full gap-4 h-full overflow-auto">
	<div class="w-full border border-subtle rounded-3xl overflow-hidden">
		{#if contract}
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
