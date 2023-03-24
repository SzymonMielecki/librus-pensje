<script lang="ts">
	import type { PageData } from './$types';
	import { Trash } from 'lucide-svelte';
	export let data: PageData;
	const d = new Date();
	let selectedMonth: string = String(d.getMonth() + 1);
	$: ({ contracts, hoursMonths } = data);
	$: console.log(selectedMonth);
	$: console.log(contracts);
	$: console.log(hoursMonths);
</script>

<div class="p-4 flex justify-center items-center flex-col w-full gap-4 h-full overflow-auto">
	<h1 class="text-2xl font-bold">Widok miesięczny</h1>
		<select name="month" id="" class="select" bind:value={selectedMonth}>
			<option selected value="9">Wrzesień</option>
			<option value="10">Październik</option>
			<option value="11">Listopad</option>
			<option value="12">Grudzień</option>
			<option value="1">Styczeń</option>
			<option value="2">Luty</option>
			<option value="3">Marzec</option>
			<option value="4">Kwiecień</option>
			<option value="5">Maj</option>
			<option value="6">Czerwiec</option>
		</select>
	<div class="w-full">
		<div class="table-container">
			<table class="table table-hover table-compact">
				<thead>
					<tr>
						<th>Nazwisko i Imię</th>
						<th>Numer Umowy</th>
						<th>Typ Umowy</th>
						<th>Kategoria nauczyciela</th>
						<th>Przedmiot</th>
						<th>Stawka Godzinowa</th>
						<th>Ilość lekcji w miesiącu</th>
						<th>Wynagrodzenie miesięczne Netto</th>
						<th>Usuń umowę</th>
					</tr>
				</thead>
				<tbody>
					{#each contracts as contract, i}
							<tr>
								<td><a href="/teacher/{contract.teacherName}">{contract.teacherName}</a></td>
								<td>{contract.contractNumber}</td>
								<td>{contract.contractTypeName}</td>
								<td>{contract.categoryName}</td>
								<td>{contract.subjectName}</td>
								<td>{Number(contract.hourlyRate)}</td>
								<td>{Number(contract.hoursPerMonth.find(element => element.month === Number(selectedMonth))?.hoursWorked)}</td>
								<td>{Number(contract.hoursPerMonth.find(element => element.month === Number(selectedMonth))?.hoursWorked) * Number(contract.hourlyRate)}</td>
								<td>
									<form
										action="?/deleteContract&id={contract.id}"
										method="POST"
										class=""
										name="deleteForm"
									>
										<button type="submit"><Trash /></button>
									</form>
								</td>
							</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</div>
</div>
