<script lang="ts">
	export let data;
	const monthList = [9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8];
	$: ({ contract } = data);
</script>

<div class="p-4 flex justify-center items-center flex-col w-full gap-4 h-full overflow-auto">
	<div class="w-full">
		{#if contract}
			<div class="card w-auto p-4">
				<h1>{contract.employee.name}</h1>
				<div>
					<h2>Usługi</h2>
					<div class="grid">
						<table class="table">
							<thead>
								<tr>
									<th />
									<th>Przedmiot</th>
									<th>Wrzesień</th>
									<th>Październik</th>
									<th>Listopad</th>
									<th>Grudzień</th>
									<th>Styczeń</th>
									<th>Luty</th>
									<th>Marzec</th>
									<th>Kwiecień</th>
									<th>Maj</th>
									<th>Czerwiec</th>
									<th>Lipiec</th>
									<th>Sierpień</th>
								</tr>
							</thead>
							<tbody>
								{#each contract.contractService as contractService}
									<!-- <tr>
										<td>Ilość godzin</td>
										<td rowspan="2">{contractService.service.name}</td>
										{#each monthList as month}
											<td
												>{Number(
													contractService.hoursMonths.find(
														(element) => element.month === Number(month)
													)?.hoursWorked
												)}</td
											>
										{/each}
									</tr>
									<tr>
										<td>Wynagrodzenie</td>
										{#each monthList as month}
											<td
												>{Number(
													contractService.hoursMonths.find(
														(element) => element.month === Number(month)
													)?.hoursWorked
												) * Number(contractService.salary)}</td
											>
										{/each}
									</tr> -->
									<tr>
										<td>Wynagrodzenie/Ilośc godzin</td>
										<td>{contractService.service.name}</td>
										{#each monthList as month}
											<td
												>{Number(
													contractService.hoursMonths.find(
														(element) => element.month === Number(month)
													)?.hoursWorked
												) * Number(contractService.salary)}/{Number(
													contractService.hoursMonths.find(
														(element) => element.month === Number(month)
													)?.hoursWorked
												)}</td
											>
										{/each}
									</tr>
								{/each}
							</tbody>
						</table>
						<!-- <Accordion>
							{#each contract.contractService as contractService}
								<AccordionItem>
									<svelte:fragment slot="summary">
										{contractService.service.name}
									</svelte:fragment>
									<svelte:fragment slot="content">
										<div class="grid">
											<div class="card p-4">
                                                
											</div>  
										</div>
									</svelte:fragment>
								</AccordionItem>
							{/each}
						</Accordion> -->
					</div>
				</div>
			</div>
		{/if}
	</div>
</div>
