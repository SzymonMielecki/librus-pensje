<script lang='ts'>
  import { superForm } from "sveltekit-superforms/client";

  export let data

  const { form, errors, enhance, constraints } = superForm(data.form, { 
	taintedMessage: "Czy na pewno chcesz opuścić stronę?", 
	validators: {
		name: (name) => (name.length < 1 ? "Nazwa kategorii nie może być pusta" : null)
	}
});
</script>

<div class="grid place-content-center h-full w-full">
	<form method="POST" autocomplete="off" use:enhance class="grid h-full p-6 gap-8 w-96 max-w-sm border-subtle rounded-3xl border ">
		<h1 class="text-lg">Nowa kategoria nauczycieli</h1>
		<label class="input-label w-full">
			Nazwa kategorii
			<input type="text" name="name" id="name" class="input" bind:value={$form.name} placeholder="Nauczyciel przedmiotu zawodowego"/>
			
			{#if $errors.name}
			<small class="text-primary-400">{$errors.name}</small>
			{/if}
		</label>
		<button class="btn variant-filled" type="submit">Dodaj</button>
	</form>
</div>
