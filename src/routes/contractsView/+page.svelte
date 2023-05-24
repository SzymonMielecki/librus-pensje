<script lang="ts">
	import type { PageData } from './$types';
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
	export let data: PageData;
	const d = new Date();
	let selectedMonth: string = String(d.getMonth() + 1);
	$: ({ contracts } = data);
	$: console.log(selectedMonth);
	$: console.log(contracts);
</script>

<div class="p-4 flex justify-center items-center flex-col w-full gap-4 h-full overflow-auto">
	<h1 class="text-2xl font-bold">Widok miesięczny</h1>
	<select name="month" id="" class="select" bind:value={selectedMonth}>
		<option value="1">Styczeń</option>
		<option value="2">Luty</option>
		<option value="3">Marzec</option>
		<option value="4">Kwiecień</option>
		<option value="5">Maj</option>
		<option value="6">Czerwiec</option>
		<option value="7">Lipiec</option>
		<option value="8">Sierpień</option>
		<option selected value="9">Wrzesień</option>
		<option value="10">Październik</option>
		<option value="11">Listopad</option>
		<option value="12">Grudzień</option>
	</select>
	<div class="w-full">
		{#each contracts as contract}
			<div class="card w-auto">
				<Accordion>
					<AccordionItem>
						<svelte:fragment slot="summary">
							<h2>Umowa nr. {contract.number}</h2>
							<a href="/contract/{contract.id}">Zobacz więcej</a>
						</svelte:fragment>
						<svelte:fragment slot="content">
							<div class="grid grid-cols-2 gap-4">
								<div class="card p-2">
									<h4>Nauczyciel</h4>
									{contract.employee.name}
								</div>
								<div class="card p-2">
									<h4>Typ umowy</h4>
									{contract.contractType.name}
								</div>
								<div class="card p-2 col-span-2">
									<AccordionItem>
										<svelte:fragment slot="summary">
											<h4>Przedmioty</h4>
										</svelte:fragment>
										<svelte:fragment slot="content">
											<div class="grid">
												{#each contract.contractService as contractService}
													<div class="card">
														<AccordionItem>
															<svelte:fragment slot="summary">
																{contractService.service.name}
															</svelte:fragment>
															<svelte:fragment slot="content">
																<div class="grid grid-cols-2">
																	<div class="card p-2">
																		<h4>Stawka godzinowa</h4>
																		{contractService.salary}
																	</div>
																	<div class="card p-2">
																		<h4>
																			Wynagrodzenie za miesiąc {selectedMonth}:
																		</h4>
																		{Number(
																			contractService.hoursMonths.find(
																				(element) => element.month === Number(selectedMonth)
																			)?.hoursWorked
																		) * Number(contractService.salary)}
																	</div>
																</div>
															</svelte:fragment>
														</AccordionItem>
													</div>
												{/each}
											</div>
										</svelte:fragment>
									</AccordionItem>
								</div>
								{#if contract.fixedSalary && contract.salaryType}
									<div class="card p-2">
										<h4>Wynagrodzenie stałe</h4>
										{contract.fixedSalary}
									</div>
									<div class="card p-2">
										<h4>Typ Wynagrodzenia</h4>
										{contract.salaryType.name}
									</div>
								{/if}
							</div>
						</svelte:fragment>
					</AccordionItem>
				</Accordion>
			</div>
		{/each}
		<!-- <div class="table-container">
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
							<td
								>{Number(
									contract.hoursPerMonth.find((element) => element.month === Number(selectedMonth))
										?.hoursWorked
								)}</td
							>
							<td
								>{Number(
									contract.hoursPerMonth.find((element) => element.month === Number(selectedMonth))
										?.hoursWorked
								) * Number(contract.hourlyRate)}</td
							>
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
		</div> -->
	</div>
</div>
