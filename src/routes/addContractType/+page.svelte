<script lang='ts'>
	import { superForm } from "sveltekit-superforms/client";
	import type { PageData } from "./$types";
  
	export let data: PageData;
  
	const { form, errors, enhance} = superForm(data.form, { 
	  taintedMessage: "Czy na pewno chcesz opuścić stronę?", 
	  validators: {
		  contractTypeName: (contractTypeName) => (contractTypeName.length < 1 ? "Nazwa typu umowy nie może być pusta" : null)
	  }
  });
  </script>

<div class="flex justify-center items-center h-full w-full">
	<div class="card w-auto h-auto">
		<form method="POST" class="h-full" autocomplete="off" use:enhance>
			<div class="form-group flex content-start flex-col h-full p-4 gap-10">
				<h1 class="m-4">Nowy typ umowy</h1>

				<label for="contractTypeName">Nazwa typu umowy</label>
				<input type="text" name="contractTypeName" id="contractTypeName" class="input" bind:value={$form.contractTypeName}/>

				{#if $errors.contractTypeName}
					<small class="text-primary-400">{$errors.contractTypeName}</small>
				{/if}

				<button class="btn variant-filled" type="submit">Dodaj</button>
			</div>
		</form>
	</div>
</div>
