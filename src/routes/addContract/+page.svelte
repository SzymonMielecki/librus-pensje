<script lang="ts">
	import type { PageData } from './$types';
	import { superForm } from 'sveltekit-superforms/client';
	import { Plus } from 'lucide-svelte';

	export let data: PageData;

	$: ({ employee, service, contractType, salaryType, category, contractEmployeeType } = data);

	const { form, enhance } = superForm(data.form, {
		taintedMessage: 'Czy na pewno chcesz opuścić stronę?'
	});
	let serviceCount = 1;
</script>

<div class="flex justify-center items-center h-full w-full">
	<div class="card w-auto h-auto max-h-full">
		<form method="POST" class="h-full" use:enhance>
			<div class="form-group flex content-start flex-col h-full p-4 gap-5">
				<h1 class="m-4">Nowa Umowa</h1>

				<label>
					Nazwisko i imię pracownika
					<select
						name="employeeName"
						id="employeeName"
						class="select"
						bind:value={$form.employeeName}
					>
						<option value="" disabled selected hidden>Wybierz pracownika</option>
						$: {#each employee as employee}
							<option value={employee.name}>{employee.name}</option>
						{/each}
					</select>
				</label>

				<label>
					Numer umowy
					<input
						type="text"
						name="contractNumber"
						id="contractNumber"
						class="input"
						placeholder="Uzupełnij numer umowy"
						bind:value={$form.contractNumber}
					/>
				</label>

				<label>
					Typ umowy
					<select
						name="contractTypeName"
						id="contractTypeName"
						class="select"
						bind:value={$form.contractTypeName}
					>
						<option value="" disabled selected hidden>Wybierz pracownika</option>
						$: {#each contractType as contractType}
							<option value={contractType.name}>{contractType.name}</option>
						{/each}
					</select>
				</label>

				{#if $form.contractTypeName === 'Umowa o pracę'}
					<label>
						Stawka godzinowa
						<input
							type="number"
							name="salary"
							id="salary"
							class="input"
							placeholder="Uzupełnij stawkę godzinową"
							bind:value={$form.fixedSalary}
						/>
					</label>

					<label>
						Typ stawki
						<select
							name="salaryTypeName"
							id="salaryTypeName"
							class="select"
							bind:value={$form.salaryTypeName}
						>
							<option value="" disabled selected hidden>Wybierz pracownika</option>
							$: {#each salaryType as salaryType}
								<option value={salaryType.name}>{salaryType.name}</option>
							{/each}
						</select>
					</label>
				{/if}

				<button
					class="btn w-full variant-filled flex justify-start"
					on:click={() => {
						serviceCount += 1;
					}}><Plus />Dodaj nową usługę</button
				>
				{#each Array(serviceCount) as _, i}
					<label>
						Nazwa usługi {i + 1}
						<select
							name="serviceName"
							id="serviceName"
							class="select"
							bind:value={$form.service[i].name}
						>
							<option value="" disabled selected hidden>Wybierz przedmiot</option>
							$: {#each service as service}
								<option value={service.name}>{service.name}</option>
							{/each}
						</select>
					</label>
					{#if $form.contractTypeName !== 'Umowa o pracę'}
						<label>
							Stawka godzinowa {i + 1}
							<input
								type="number"
								name="salary"
								id="salary"
								class="input"
								placeholder="Uzupełnij stawkę godzinową"
								bind:value={$form.service[i].salary}
							/>
						</label>

						<label>
							Typ stawki
							<select
								name="salaryTypeName"
								id="salaryTypeName"
								class="select"
								bind:value={$form.service[i].salaryTypeName}
							>
								<option value="" disabled selected hidden>Wybierz pracownika</option>
								$: {#each salaryType as salaryType}
									<option value={salaryType.name}>{salaryType.name}</option>
								{/each}
							</select>
						</label>
					{/if}

					<label>
						Kategoria {i + 1}
						<select
							name="categoryName"
							id="categoryName"
							class="select"
							bind:value={$form.service[i].categoryName}
						>
							<option value="" disabled selected hidden>Wybierz kategorię</option>
							$: {#each category as category}
								<option value={category.name}>{category.name}</option>
							{/each}
						</select>
					</label>

					<label>
						Stanowisko {i + 1}
						<select
							name="contractEmployeeTypeName"
							id="contractEmployeeTypeName"
							class="select"
							bind:value={$form.service[i].contractEmployeeTypeName}
						>
							<option value="" disabled selected hidden>Wybierz stanowisko</option>
							$: {#each contractEmployeeType as contractEmployeeType}
								<option value={contractEmployeeType.name}>{contractEmployeeType.name}</option>
							{/each}
						</select>
					</label>
				{/each}

				<button class="btn variant-filled" type="submit">Dodaj</button>
			</div>
		</form>
	</div>
</div>
