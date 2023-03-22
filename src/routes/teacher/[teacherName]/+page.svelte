<!-- <script lang="ts">
    import { page } from '$app/stores'
    import type { PageData } from './$types';
	export let data: PageData;
    $: ({ teacher, september, october, november, december, january, february, march,april,may,june } = data);
    export let teacherName = $page.params.teacherName;
</script>

<div class="grid grid-rows-2">
    <div class="grid place-items-center">
        <h3>{teacherName}</h3>
    </div>
    <div>
        <table>
            <thead>
                <tr>
                    <th></th>
                    <th>Przedmiot</th>
                    <th>Roczne</th>
                    <th>Wrzesień</th>
                    <th>Październik</th>
                    <th>Listopad</th>
                    <th>Grudzień</th>
                    <th>Styczeń</th>
                    <th>Luty</th>
                    <th>Marzec</th>
                    <th>Kwiecień</th>
                    <th>Maj</th>
                    <th>Czerwiec</th>
                </tr>
            </thead>
            <tbody>
                {#each contracts as contract}
                <tr>
                    <td>Ilość godzin</td>
                    <td>{contract.subjectName}</td>
                    <td>{october}</td>
                    <td>{september}</td>
                    <td>{october}</td>
                    <td>{november}</td>
                    <td>{december}</td>
                    <td>{january}</td>
                    <td>{february}</td>
                    <td>{march}</td>
                    <td>{april}</td>
                    <td>{may}</td>
                    <td>{june}</td>
                </tr>
                <tr>
                    <td>Wynagrodzenie</td>
                    <td>{contract.subjectName}</td>
                    <td>{october*contract.hourlyRate}</td>
                </tr>
                {/each}
            </tbody>
        </table>
    </div>
</div> -->
