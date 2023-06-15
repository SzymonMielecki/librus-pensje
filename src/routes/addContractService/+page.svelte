<script lang="ts">
	import { page } from '$app/stores';
	import { superForm } from 'sveltekit-superforms/client';
	import Combobox from '$lib/ui/combobox.svelte';
	import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte';
	import { goto } from '$app/navigation';
	export let data

	let thisContractInfo = data.thisContractInfo
	let service = data.service.map((service) => {
		return {
			id: service.id,
			name: service.name
		}
	})
	let salaryType = data.salaryType.map((salaryType) => {
		return {
			id: salaryType.id,
			name: salaryType.name
		}
	})
	let category = data.category.map((category) => {
		return {
			id: category.id,
			name: category.name
		}
	})
	let contractEmployeeType = data.contractEmployeeType.map((contractEmployeeType) => {
		return {
			id: contractEmployeeType.id,
			name: contractEmployeeType.name
		}
	})
	const { form, enhance } = superForm(data.form, {
		taintedMessage: null
	});
	// console.log(fromWhereId)
	if (thisContractInfo) {
		$form.contractId = thisContractInfo.id
	} else {
		goto('/contractsView')
	}
	console.log('contractId', $form.contractId);
	console.log('thisContractInfo', thisContractInfo);
	
</script>

<SuperDebug data={$form} />

{#if thisContractInfo}
<div class="grid place-content-center h-full w-full">
	<form method="POST" autocomplete="off" use:enhance class="grid h-full p-6 gap-8 w-96 max-w-sm border-subtle rounded-3xl border ">
		<h1 class="m-4 text-xl">
			Nowa Usługa 
		</h1>
		<h2 class="text-lg">
			dla pracownika {thisContractInfo.employee.name} <br>
			dla Umowy nr. {thisContractInfo.number} <br>
		</h2>

		<input type="hidden" bind:value={$form.contractId}>


		<label class="input-label w-full" for="serviceId">
			Usługa
			<!-- <Combobox id="serviceId" placeholder="Podstawy Informatyki" items={service} bind:value={comboboxSelectedService}/> -->
			<select name="serviceId" id="serviceId" class="input w-full" bind:value={$form.serviceId}>
				<option value="" disabled selected hidden>Wybierz usługę</option>
				{#each service as service}
					<option value={service.id}>{service.name}</option>
				{/each}
			</select>
		</label>

		<label class="input-label w-full" for="salary">
			Stawka
			<input
				type="number"
				name="salary"
				id="salary"
				class="input"
				placeholder="Uzupełnij stawkę"
				bind:value={$form.salary}
			/>
		</label>

		<label class="input-label w-full" for="salaryTypeId">
			Typ stawki
			<select
				name="salaryTypeId"
				id="salaryTypeId"
				class="input w-full"
				bind:value={$form.salaryTypeId}
			>
				<option value="" disabled selected hidden>Wybierz typ stawki</option>
				{#each salaryType as salaryType}
					<option value={salaryType.id}>{salaryType.name}</option>
				{/each}
			</select>
		</label>

		<label class="input-label w-full" for="categoryId">
			Kategoria
			<select name="categoryId" id="categoryId" class="input w-full" bind:value={$form.categoryId}>
				<option value="" disabled selected hidden>Wybierz kategorię umowy</option>
				{#each category as category}
					<option value={category.id}>{category.name}</option>
				{/each}
			</select>
		</label>

		<label class="input-label w-full" for="contractEmployeeTypeId">
			Typ pracownika
			<select
				name="contractEmployeeTypeId"
				id="contractEmployeeTypeId"
				class="input w-full"
				bind:value={$form.contractEmployeeTypeId}
			>
				<option value="" disabled selected hidden>Wybierz typ pracownika</option>
				{#each contractEmployeeType as contractEmployeeType}
					<option value={contractEmployeeType.id}>{contractEmployeeType.name}</option>
				{/each}
			</select>
		</label>

		<!-- {#if $form.contractTypeId === uopId}
			<label class="input-label w-full" for="contractId">
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

			<label class="input-label w-full" for="contractId">
				Typ stawki
				<select
					name="salaryTypeId"
					id="salaryTypeId"
					class="input w-full"
					bind:value={$form.salaryTypeId}
				>
					<option value="" disabled selected hidden>Wybierz typ stawki</option>
					$: {#each salaryType as salaryType}
						<option value={salaryType.id}>{salaryType.name}</option>
					{/each}
				</select>
			</label>
		{/if} -->
		<button class="btn" type="submit">Dodaj</button>
	</form>
	<button class="btn btn-outline" on:click={() => {console.log($form)}}>test</button>
</div>
{/if}
