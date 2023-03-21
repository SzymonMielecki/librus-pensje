<script lang="ts">
	import type { PageData } from './$types';
	import { superForm } from "sveltekit-superforms/client";

	export let data: PageData;

	$: ({ teachers, subjects, contractTypes, categories } = data);
	
	const { form, errors, enhance} = superForm(data.form, { 
	  taintedMessage: "Czy na pewno chcesz opuścić stronę?", 
	  validators: {
		  contractTypeName: (contractTypeName) => (contractTypeName.length < 1 ? "Nazwa typu umowy nie może być pusta" : null)
	  }
  });
</script>

<div class="flex justify-center items-center h-full w-full">
	<div class="card w-auto h-auto max-h-full">
		<form method="POST" class="h-full">
			<div class="form-group flex content-start flex-col h-full p-4 gap-5">
				<h1 class="m-4">Nowa Umowa</h1>
				
				<label>
					Nazwisko i imię nauczyciela
					<select
						name="teacherName"
						id="teacherName"
						class="select"
						bind:value={$form.teacherName}
					>
						<option value="" disabled selected hidden>Wybierz nauczyciela</option>
						$: {#each teachers as teacher}
							<option value={teacher.name}>{teacher.name}</option>
						{/each}
					</select>
				</label>

				<label>
					Nazwa przedmiotu
					<select name="subjectName" id="subjectName" class="select" bind:value={$form.subjectName}>
						<option value="" disabled selected hidden>Wybierz przedmiot</option>
						$: {#each subjects as subject}
							<option value={subject.name}>{subject.name}</option>
						{/each}
					</select>
				</label>

				<label>Typ umowy

					<select name="contractTypeName" id="contractTypeName" class="select" bind:value={$form.contractTypeName}>
						<option value="" disabled selected hidden>Wybierz typ umowy</option>
						$: {#each contractTypes as contractType}
							<option value={contractType.name}>{contractType.name}</option>
						{/each}
					</select>
				</label>

				<label>
					Kategoria nauczyciela
					<select name="categoryName" id="categoryName" class="select" bind:value={$form.categoryName}>
						<option value="" disabled selected hidden>Wybierz kategorię</option>
						$: {#each categories as category}
							<option value={category.name}>{category.name}</option>
						{/each}
					</select>
				</label>

				<label>
					Stawka godzinowa
					<input
						type="number"
						name="hourlyRate"
						class="input"
						placeholder="Wpisz wartość"
						id="hourlyRate"
						autocomplete="off"
						bind:value={$form.hourlyRate}
					/>
				</label>

				<label>
					Numer umowy
					<input
						type="text"
						name="contractNumber"
						class="input"
						placeholder="Wpisz numer umowy"
						id="contractNumber"
						autocomplete="off"
						bind:value={$form.contractNumber}
					/>
				</label>
				<button class="btn variant-filled" type="submit">Dodaj</button>
			</div>
		</form>
	</div>
</div>
