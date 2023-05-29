<script lang="ts">
	import Table from '$lib/ui/table.svelte';
	import Tabs from '$lib/ui/tabs.svelte';
	import { Plus } from 'lucide-svelte'
	export let data
	const d = new Date().getMonth()+1;
	console.log(d)
	const contracts = data.contracts
	console.log(contracts);
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
	<div class="w-full">
		<Table
			items={contracts}
			id="id"
			bind:selected
			selectable
			columnsEditable
		>
		</Table>
	</div>
</div>
