<script lang="ts">
	import { goto } from '$app/navigation';
	import Table from '$lib/ui/table.svelte';
	import { Plus} from 'lucide-svelte'
	export let data
	const contracts = data.contracts
	console.log(contracts);
	let items = contracts.map((items) => {
		return {
			id: items.id,
			number: items.number,
			employee: items.employee?.name,
			contractType: items.contractType?.name,
		}
	})
	let item = {
		id: 1,
		number: 'test',
		employee: 'test',
		contractType: 'test',
	}
</script>


<div class="p-4 flex justify-center items-center flex-col w-full gap-4 h-full overflow-auto">
	<div class="flex flex-row gap-6">
		<h1 class="text-2xl font-bold">Widok miesięczny</h1> 
		<a class="btn" href="/addContract">
			<Plus/>
			Dodaj umowę
		</a>
	</div>
	<div class="w-full">
		<Table
			items={items}
			id="id"
			interactive
			on:rowclick={({ detail: row }) => goto(`/contract/${row.id}`)}
			tableColumns={Object.keys(item).map((key) => ({
				displayName: key
					.replace(/_/g, ' ')
					.replace(/([A-Z])/g, ' $1')
					.replace(/^./, (str) => str.toUpperCase()),
				name: key
			}))}
		/>
	</div>
</div>
