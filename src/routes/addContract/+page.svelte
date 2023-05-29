<script lang="ts">
	import { superForm } from 'sveltekit-superforms/client';
	import type { ContractType } from '$lib/server/services/contractType';
	import Combobox from '$lib/ui/combobox.svelte';
	import type { Employee } from '$lib/server/services/employee.js';
	import type { Salad } from 'lucide-svelte';
	import type { SalaryType } from '$lib/server/services/salaryType.js';

	export let data

	// let employee = data.employee.map((employee) => {
	// 	return {
	// 		value: employee.id,
	// 		label: employee.name
	// 	}
	// })
	let employee = data.employee.map((employee: Employee) => {
		return {
			id: employee.id,
			name: employee.name
		}
	})
	let contractType = data.contractType.map((contractType: ContractType) => {
		return {
			id: contractType.id,
			name: contractType.name
		}
	})

	let salaryType = data.salaryType.map((salaryType: SalaryType) => {
		return {
			id: salaryType.id,
			name: salaryType.name
		}
	})

	let uopId = data.uop[0] ? data.uop[0].id : null;

	const { form, enhance } = superForm(data.form, {

		taintedMessage: null
	});
	let labelInside = false;
</script>
<div class="grid place-content-center h-full w-full">
	<form method="POST" autocomplete="off" use:enhance class="grid h-full p-6 gap-8 w-96 max-w-sm border-subtle rounded-3xl border ">

		<h1 class="m-4">Nowa Umowa</h1>

		<label class="input-label w-full" for="employeeId">
				Nazwisko i imię pracownika
			<select
				name="employeeId"
				id="employeeId"
				class="input w-full"
				bind:value={$form.employeeId}
			>
				<option value="" disabled selected hidden 
				class="text-base-950 dark:text-base-50 text-sm font-medium"
				>Wybierz pracownika</option>
				$: {#each employee as employee}
					<option value={employee.id}>{employee.name}</option>
				{/each}
			</select>
			<!-- <Combobox
				id="employeeId"
				placeholder="Wybierz pracownika"
				items={employee}
				bind:value={$form.employeeId}
			/> -->
		</label>

		<label class="input-label w-full">
			Numer umowy
			<input
				type="text"
				name="number"
				id="number"
				class="input"
				placeholder="Uzupełnij numer umowy"
				bind:value={$form.number}
			/>
		</label>

		<label class="input-label w-full">
			Typ umowy
			<select
				name="contractTypeId"
				id="contractTypeId"
				class="input w-full"
				bind:value={$form.contractTypeId}
			>
				<option value="" disabled selected hidden 
				class="text-base-950 dark:text-base-50 text-sm font-medium"
				>Wybierz typ umowy</option>
				$: {#each contractType as contractType}
					<option value={contractType.id}>{contractType.name}</option>
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
	</form>
</div>
