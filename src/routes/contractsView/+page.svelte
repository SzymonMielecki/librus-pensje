<script lang="ts">
	import { goto } from '$app/navigation';
	import Popover from '$lib/ui/popover.svelte';
	import Table from '$lib/ui/table.svelte';
	import Tabs from '$lib/ui/tabs.svelte';
	import { Edit, MoreHorizontal, Plus } from 'lucide-svelte'
	import { tippy } from 'svelte-tippy';
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
			interactive
			on:rowclick={({ detail: row }) => goto(`/contract/${row.id}`)}
		>
		</Table>
	</div>
</div>
