<script lang="ts">
	import type { PageData } from './$types';
	import { superForm } from 'sveltekit-superforms/client';

	export let data: PageData;

	$: ({ contract, service, salaryType, category, contractEmployeeType, uop } = data);

	$: uopId = uop ? uop.id : null;

	const { form, enhance } = superForm(data.form, {
		taintedMessage: 'Czy na pewno chcesz opuścić stronę?'
	});
	// const schema = z.object({
	// 	contractId: z.string().nonempty(),
	// 	serviceId: z.string().nonempty(),
	// 	salary: z.number().nonnegative(),
	// 	salaryTypeId: z.string().nonempty(),
	// 	categoryId: z.string().nonempty(),
	// 	contractEmployeeTypeId: z.string().nonempty()
	// });
</script>

<div class="flex justify-center items-center h-full w-full">
	<div class="card w-auto h-auto max-h-full">
		<form method="POST" class="h-full" use:enhance>
			<div class="form-group flex content-start flex-col h-full p-4 gap-5">
				<h1 class="m-4">Nowa Usługa dla Umowy</h1>

				<label>
					Nr. umowy
					<select name="contractId" id="contractId" class="select" bind:value={$form.contractId}>
						<option value="" disabled selected hidden>Wybierz nr. umowy</option>
						$: {#each contract as contract}
							<option value={contract.id}>{contract.number}</option>
						{/each}
					</select>
				</label>

				<label>
					Usługa
					<select name="serviceId" id="serviceId" class="select" bind:value={$form.serviceId}>
						<option value="" disabled selected hidden>Wybierz usługę</option>
						$: {#each service as service}
							<option value={service.id}>{service.name}</option>
						{/each}
					</select>
				</label>

				<label>
					Stawka
					<input
						type="text"
						name="salary"
						id="salary"
						class="input"
						placeholder="Uzupełnij stawkę"
						bind:value={$form.salary}
					/>
				</label>

				<label>
					Typ stawki
					<select
						name="salaryTypeId"
						id="salaryTypeId"
						class="select"
						bind:value={$form.salaryTypeId}
					>
						<option value="" disabled selected hidden>Wybierz typ stawki</option>
						$: {#each salaryType as salaryType}
							<option value={salaryType.id}>{salaryType.name}</option>
						{/each}
					</select>
				</label>

				<label>
					Kategoria
					<select name="categoryId" id="categoryId" class="select" bind:value={$form.categoryId}>
						<option value="" disabled selected hidden>Wybierz kategorię umowy</option>
						$: {#each category as category}
							<option value={category.id}>{category.name}</option>
						{/each}
					</select>
				</label>

				<label>
					Typ pracownika
					<select
						name="contractEmployeeTypeId"
						id="contractEmployeeTypeId"
						class="select"
						bind:value={$form.contractEmployeeTypeId}
					>
						<option value="" disabled selected hidden>Wybierz typ pracownika</option>
						$: {#each contractEmployeeType as contractEmployeeType}
							<option value={contractEmployeeType.id}>{contractEmployeeType.name}</option>
						{/each}
					</select>
				</label>

				<!-- {#if $form.contractTypeId === uopId}
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
							name="salaryTypeId"
							id="salaryTypeId"
							class="select"
							bind:value={$form.salaryTypeId}
						>
							<option value="" disabled selected hidden>Wybierz typ stawki</option>
							$: {#each salaryType as salaryType}
								<option value={salaryType.id}>{salaryType.name}</option>
							{/each}
						</select>
					</label>
				{/if} -->
				<button class="btn variant-filled" type="submit">Dodaj</button>
			</div>
		</form>
	</div>
</div>
