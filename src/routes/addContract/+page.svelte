<script lang="ts">
	import type { PageData } from './$types';
	import { superForm } from "sveltekit-superforms/client";
	import { Plus } from "lucide-svelte";

	export let data: PageData;

	$: ({ employee, service, contractType } = data);
	
	const { form, errors, enhance} = superForm(data.form, { 
	  taintedMessage: "Czy na pewno chcesz opuścić stronę?", 
	  validators: {

	  }
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
				
				<button class="btn w-full variant-filled flex justify-start" on:click={()=>{serviceCount+=1}}><Plus/>Dodaj nową usługę</button>
				{#each Array(serviceCount) as _, i}
					<label>
						Nazwa usługi {i+1}
						<select name="serviceName" id="serviceName" class="select" bind:value={$form.serviceName[i]}>
							<option value="" disabled selected hidden>Wybierz przedmiot</option>
							$: {#each service as service}
							<option value={service.name}>{service.name}</option>
							{/each}
						</select>
					</label>
				{/each}

				<label>
					Typ umowy
					<select
						name="employeeName"
						id="employeeName"
						class="select"
						bind:value={$form.employeeName}
					>
						<option value="" disabled selected hidden>Wybierz pracownika</option>
						$: {#each contractType as contractType}
							<option value={contractType.name}>{contractType.name}</option>
						{/each}
					</select>
				</label>
				
				<button class="btn variant-filled" type="submit">Dodaj</button>
			</div>
		</form>
	</div>
</div>
