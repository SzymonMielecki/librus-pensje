<script lang="ts">
	import { Home, Calendar, Newspaper, Users, Edit, ListPlus, Contact, Album, Book } from 'lucide-svelte';
</script>

<div class="hidden">
	<div class="p-4 h-full w-full">
		<ul class="list flex flex-col items-center gap-4 w-full">
			<li class="w-full">
				<a
					href="/"
					class="btn gap-4 variant-ringed w-full hover:variant-ghost"
				
				>
					<Home />
					Strona głowna
				</a>
			</li>
			<li class="w-full">
				<a
					href="/contractsView"
					class="btn gap-4 variant-ringed w-full hover:variant-ghost"
				
				>
					<Calendar />
					Widok wszystkich umów
				</a>
			</li>
			<li class="w-full">
				<a
					href="/addCategory"
					class="btn gap-4 variant-ringed w-full hover:variant-ghost"
				
				>
					<Album />
					Dodaj kategorię
				</a>
			</li>
			<li class="w-full">
				<a
					href="/addEmployeeType"
					class="btn gap-4 variant-ringed w-full hover:variant-ghost"
				
				>
					<Contact />
					Dodaj typ pracownika
				</a>
			</li>
			<li class="w-full">
				<a
					href="/addEmployee"
					class="btn gap-4 variant-ringed w-full hover:variant-ghost"
				
				>
					<Users />
					Dodaj pracownika
				</a>
			</li>
			<li class="w-full">
				<a
					href="/addService"
					class="btn gap-4 variant-ringed w-full hover:variant-ghost"
				
				>
					<Edit />
					Dodaj usługę
				</a>
			</li>
			<li class="w-full">
				<a
					href="/addContractType"
					class="btn gap-4 variant-ringed w-full hover:variant-ghost"
				
				>
					<Book />
					Dodaj typ umowy
				</a>
			</li>
			<li class="w-full">
				<a
					href="/addContract"
					class="btn gap-4 variant-ringed w-full hover:variant-ghost"
				
				>
					<ListPlus />
					Dodaj umowę
				</a>
			</li>
			<li class="w-full">
				<a
					href="/addContractService"
					class="btn gap-4 variant-ringed w-full hover:variant-ghost"
				
				>
					<Newspaper />
					Dodaj usługę dla Umowy
				</a>
			</li>
		</ul>
	</div>
</div>
