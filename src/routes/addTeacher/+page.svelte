<div class="h-full w-full grid grid-flow-col place-items-center">
	<div class="card w-auto h-auto">
		<form action="?/createTeacher" method="POST" class="h-full" autocomplete="off">
			<div class="form-group flex content-start flex-col h-full p-4 gap-10">
				<h1 class="m-4">Nowy nauczyciel</h1>
				<input
					type="text"
					name="name"
					id="name"
					class="input"
					placeholder="Nazwisko i imię nauczyciela"
				/>
				<button class="btn variant-filled">Dodaj</button>
			</div>
		</form>
	</div>
</div>
