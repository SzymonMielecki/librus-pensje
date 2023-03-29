<script lang='ts'>
  import { superForm } from "sveltekit-superforms/client";
  import type { PageData } from "./$types";

  export let data: PageData;

  const { form, errors, enhance, constraints } = superForm(data.form, { 
	taintedMessage: "Czy na pewno chcesz opuścić stronę?", 
	validators: {
		name: (name) => (name.length < 1 ? "Nazwa kategorii nie może być pusta" : null)
	}
});
</script>

<div class="flex justify-center items-center h-full w-full">
	<div class="card w-auto h-auto">
		<form method="POST" class="h-full" autocomplete="off" use:enhance>
			<div class="form-group flex content-start flex-col h-full p-4 gap-10">
				<h1 class="m-4">Nowa kategoria nauczycielii</h1>
					<label>
						Nazwa kategorii
						<input type="text" name="name" id="name" class="input" bind:value={$form.name}/>
						
						{#if $errors.name}
						<small class="text-primary-400">{$errors.name}</small>
						{/if}
					</label>
				<button class="btn variant-filled" type="submit">Dodaj</button>
			</div>
		</form>
	</div>
</div>
