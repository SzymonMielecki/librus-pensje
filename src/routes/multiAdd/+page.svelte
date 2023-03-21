<script lang="ts">
    import type { PageData } from './$types';
    export let data: PageData;

    $: ({ teachers, subjects, contractTypes, categories } = data);
</script>

<div class="grid grid-rows-2 grid-cols-3">
    <div class="flex justify-center items-center h-full w-full">
        <div class="card w-auto h-auto">
            <form action="?/createCategory" method="POST" class="h-full" autocomplete="off">
                <div class="form-group flex content-start flex-col h-full p-4 gap-10">
                    <h1 class="m-4">Nowa kategoria nauczycielii</h1>
                    <input type="text" name="name" id="name" class="input" placeholder="Nazwa kategorii" />
                    <button class="btn variant-filled">Dodaj</button>
                </div>
            </form>
        </div>
    </div> 
    <!-- category -->
    <div class="flex justify-center items-center h-full w-full">
        <div class="card w-auto h-auto">
            <form action="?/createContractType" method="POST" class="h-full" autocomplete="off">
                <div class="form-group flex content-start flex-col h-full p-4 gap-10">
                    <h1 class="m-4">Nowy typ umowy</h1>
                    <input type="text" name="name" id="name" class="input" placeholder="Nazwa typu umowy" />
                    <button class="btn variant-filled">Dodaj</button>
                </div>
            </form>
        </div>
    </div>
    <!-- contract type -->
    <div class="flex justify-center items-center h-full w-full">
        <div class="card w-auto h-auto">
            <form action="?/createSubject" method="POST" class="h-full" autocomplete="off">
                <div class="form-group flex content-start flex-col h-full p-4 gap-10">
                    <h1 class="m-4">Nowy przedmiot</h1>
                    <input type="text" name="name" id="name" class="input" placeholder="Nazwa przedmiotu" />
                    <button class="btn variant-filled">Dodaj</button>
                </div>
            </form>
        </div>
    </div>
    <!-- subject -->
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
    <!-- teacher    -->
    <div class="flex justify-center items-center h-full w-full row-span-2">
        <div class="card w-auto h-auto">
            <form action="?/createContract" method="POST" class="h-full">
                <div class="form-group flex content-start flex-col h-full p-4 gap-10">
                    <h1 class="m-4">Nowa Umowa</h1>
                    <select
                        name="teacher"
                        id="teacher"
                        class="select"
                        placeholder="Nazwisko i Imię nauczyciela"
                    >
                        <option value="" disabled selected hidden>Wybierz nauczyciela</option>
                        $: {#each teachers as teacher}
                            <option value={teacher.name}>{teacher.name}</option>
                        {/each}
                    </select>
                    <select name="subject" id="subject" class="select" placeholder="Przedmiot">
                        <option value="" disabled selected hidden>Wybierz przedmiot</option>
                        $: {#each subjects as subject}
                            <option value={subject.name}>{subject.name}</option>
                        {/each}
                    </select>
                    <select name="contractType" id="contractType" class="select" placeholder="Typ Umowy">
                        <option value="" disabled selected hidden>Wybierz typ umowy</option>
                        $: {#each contractTypes as contractType}
                            <option value={contractType.name}>{contractType.name}</option>
                        {/each}
                    </select>
                    <select name="category" id="category" class="select" placeholder="Kategoria nauczyciela">
                        <option value="" disabled selected hidden>Wybierz kategorię</option>
                        $: {#each categories as category}
                            <option value={category.name}>{category.name}</option>
                        {/each}
                    </select>
                    <input
                        type="number"
                        name="hourlyRate"
                        class="input"
                        placeholder="Stawka godzinowa"
                        id="hourlyRate"
                    />
                    <input
                        type="text"
                        name="contractNumber"
                        class="input"
                        placeholder="Nr. umowy"
                        id="contractNumber"
                    />
                    <button class="btn variant-filled" type="submit">Dodaj</button>
                </div>
            </form>
        </div>
    </div>
</div>