<script lang="ts">
import Table from '$lib/ui/table.svelte';
	import { Plus} from 'lucide-svelte'
	export let data
	let items = data.categories
	let item = {
		id: 1,
		name: 'test',
	}
</script>


<div class="p-4 flex justify-center items-center flex-col w-full gap-4 h-full overflow-auto">
	<div class="flex flex-row gap-6">
		<h1 class="text-2xl font-bold">Widok kategorii</h1> 
		<a class="btn" href="/addCategory">
			<Plus/>
			Dodaj Kategorię
		</a>
	</div>
	<div class="w-full">
		<Table
			items={items}
			id="id"
			interactive
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
