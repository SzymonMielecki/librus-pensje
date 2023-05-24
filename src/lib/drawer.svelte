<script lang="ts">
	import { Drawer, drawerStore } from '@skeletonlabs/skeleton';
	import { Menu, Home, Calendar, Newspaper, Users, Edit } from 'lucide-svelte';
	function drawerClose(): void {
		drawerStore.close();
	}
</script>

<Drawer width="w-auto">
	<div class="p-4 h-full w-full">
		<button on:click={drawerClose}>
			<Menu />
		</button>
		<ul class="list flex flex-col items-center gap-4 w-full">
			<li class="w-full">
				<a
					href="/"
					class="btn gap-4 variant-ringed w-full hover:variant-ghost"
					on:click={drawerClose}
				>
					<Home />
					Strona głowna
				</a>
			</li>
			<li class="w-full">
				<a
					href="/contractsView"
					class="btn gap-4 variant-ringed w-full hover:variant-ghost"
					on:click={drawerClose}
				>
					<Calendar />
					Widok wszystkich umów
				</a>
			</li>
			<li class="w-full">
				<a
					href="/addCategory"
					class="btn gap-4 variant-ringed w-full hover:variant-ghost"
					on:click={drawerClose}
				>
					<Users />
					Dodaj kategorię
				</a>
			</li>
			<li class="w-full">
				<a
					href="/addEmployeeType"
					class="btn gap-4 variant-ringed w-full hover:variant-ghost"
					on:click={drawerClose}
				>
					<Users />
					Dodaj typ pracownika
				</a>
			</li>
			<li class="w-full">
				<a
					href="/addEmployee"
					class="btn gap-4 variant-ringed w-full hover:variant-ghost"
					on:click={drawerClose}
				>
					<Users />
					Dodaj pracownika
				</a>
			</li>
			<li class="w-full">
				<a
					href="/addService"
					class="btn gap-4 variant-ringed w-full hover:variant-ghost"
					on:click={drawerClose}
				>
					<Edit />
					Dodaj usługę
				</a>
			</li>
			<li class="w-full">
				<a
					href="/addContract"
					class="btn gap-4 variant-ringed w-full hover:variant-ghost"
					on:click={drawerClose}
				>
					<Edit />
					Dodaj umowę
				</a>
			</li>
			<li class="w-full">
				<a
					href="/addContractService"
					class="btn gap-4 variant-ringed w-full hover:variant-ghost"
					on:click={drawerClose}
				>
					<Newspaper />
					Dodaj usługę dla Umowy
				</a>
			</li>
		</ul>
	</div>
</Drawer>
