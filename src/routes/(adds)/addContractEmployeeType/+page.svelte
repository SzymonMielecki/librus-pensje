<script lang="ts">
	import { superForm } from 'sveltekit-superforms/client';
	import type { PageData } from './$types';

	export let data: PageData;

	const { form, errors, enhance, constraints } = superForm(data.form, {
		taintedMessage: 'Czy na pewno chcesz opuścić stronę?',
		validators: {
			name: (name) => (name.length < 1 ? 'Nazwa typu pracownika nie może być pusta' : null)
		}
	});
</script>

<div class="grid place-content-center h-full w-full">
	<form
	method="POST"
	autocomplete="off"
	use:enhance
	class="grid h-full p-6 gap-8 w-96 max-w-sm border-subtle rounded-3xl border"
	>
	<h1 class="text-lg">Nowy typ pracownika</h1>
	<label class="input-label w-full">
		Nazwa typu pracownika
			<input
				type="text"
				name="name"
				id="name"
				class="input"
				bind:value={$form.name}
				placeholder="Nauczyciel"
				data-invalid={$errors.name}
			/>

			{#if $errors.name}
				<small class="text-red-500">{$errors.name}</small>
			{/if}
		</label>
		<button class="btn variant-filled" type="submit">Dodaj</button>
	</form>
</div>
