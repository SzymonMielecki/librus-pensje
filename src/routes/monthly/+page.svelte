<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
	import { Trash } from 'lucide-svelte';
	$: ({ contracts } = data);
	let confirmable = false;
</script>

<div class="p-4 grid grid-rows-2 place-items-center w-full gap-4">
	<h1 class="text-2xl font-bold">Widok miesięczny</h1>
	<!-- <form action="?/selectMonth&month=" method="POST">
		<select name="month" id="" class="select" on:change={this.form.submit()}>
			<option value="1">Styczeń</option>
			<option value="2">Luty</option>
			<option value="3">Marzec</option>
			<option value="4">Kwiecień</option>
			<option value="5">Maj</option>
			<option value="6">Czerwiec</option>
			<option value="7">Lipiec</option>
			<option value="8">Sierpień</option>
			<option value="9">Wrzesień</option>
			<option value="10">Październik</option>
			<option value="11">Listopad</option>
			<option value="12">Grudzień</option>
		</select>
	</form> -->
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
							<td>{contract.teacherName}</td>
							<td>{contract.contractNumber}</td>
							<td>{contract.contractTypeName}</td>
							<td>{contract.categoryName}</td>
							<td>{contract.subjectName}</td>
							<td>{contract.hourlyRate}</td>
							<td>{Number(contract.hoursWorked)}</td>
							<td>{Number(contract.hoursWorked) * Number(contract.hourlyRate)}</td>
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
