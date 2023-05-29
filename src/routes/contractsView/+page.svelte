<script lang="ts">
	import Table from '$lib/ui/table.svelte';
	import Tabs from '$lib/ui/tabs.svelte';
	import { Plus } from 'lucide-svelte'
	export let data
	const d = new Date().getMonth()+1;
	console.log(d)
	const contracts = data.contracts
	console.log(contracts, 'contracts');
	// const contract = {
	// 	employeeName: contracts[0].employee.name,
	// 	number: contracts[0].number,
	// 	serviceCount: contracts[0].contractService.length,
	// 	thisMonthsPay: contracts[0].contractService.reduce((acc, curr) => acc + Number(curr.salary), 0),
	// }
	// console.log(contract, 'contract');
	let selected: string[] = [];
	
</script>


<div class="p-4 flex justify-center items-center flex-col w-full gap-4 h-full overflow-auto">
	<div class="flex flex-row gap-6">
		<h1 class="text-2xl font-bold">Widok miesięczny</h1> 
		<a class="btn" href="/addContract">
			<Plus/>
			Dodaj umowę
		</a>
	</div>
	<!-- <div class="w-full">
		<Table
			items={contracts}
			id="id"
			tableColumns={Object.keys(contract).map((key) => ({
				displayName: key
					.replace(/_/g, ' ')
					.replace(/([A-Z])/g, ' $1')
					.replace(/^./, (str) => str.toUpperCase()),
				name: key
			}))}
			bind:selected
			selectable
			columnsEditable
		>

		</Table>
	</div> -->
</div>
