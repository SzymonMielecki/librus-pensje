<script lang="ts">
	import type { PageData } from './$types';
	import { superForm } from 'sveltekit-superforms/client';

	export let data: PageData;

	$: ({ employee, contractType, salaryType, uop } = data);

	$: uopId = uop ? uop.id : null;

	const { form, enhance } = superForm(data.form, {
		taintedMessage: 'Czy na pewno chcesz opuścić stronę?'
	});
</script>

<div class="flex justify-center items-center h-full w-full">
	<div class="card w-auto h-auto max-h-full">
		<form method="POST" class="h-full" use:enhance>
			<div class="form-group flex content-start flex-col h-full p-4 gap-5">
				<h1 class="m-4">Nowa Umowa</h1>

				<label>
					Nazwisko i imię pracownika
					<select name="employeeId" id="employeeId" class="select" bind:value={$form.employeeId}>
						<option value="" disabled selected hidden>Wybierz pracownika</option>
						$: {#each employee as employee}
							<option value={employee.id}>{employee.name}</option>
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
						name="contractTypeId"
						id="contractTypeId"
						class="select"
						bind:value={$form.contractTypeId}
					>
						<option value="" disabled selected hidden>Wybierz typ umowy</option>
						$: {#each contractType as contractType}
							<option value={contractType.id}>{contractType.name}</option>
						{/each}
					</select>
				</label>

				{#if $form.contractTypeId === uopId}
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
				{/if}
				<button class="btn variant-filled" type="submit">Dodaj</button>
			</div>
		</form>
	</div>
</div>
