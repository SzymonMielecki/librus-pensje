<script lang="ts">
    import { page } from '$app/stores'
    import type { PageData } from './$types';


	export let data: PageData;
    $: ({ contracts } = data);

    $: for(const contract of contracts){
        console.log(contract)
    }

    $: console.log(contracts)
    
    export let teacherName = $page.params.teacherName;
</script>

<div class="flex justify-start flex-col">
    <h3>{teacherName}</h3>
    <div>
        <table class="table">
            <thead>
                <tr>
                    <th></th>
                    <!-- <th>Przedmiot</th> -->
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
                <tr>
                    <td>Ilość godzin</td>
                    <td></td>
                    <!-- <td>{contract.subjectName}</td> -->
                    {#each contracts as contract, i}
                        <td>{Number(contract.hoursWorked)}</td>
                    {/each}
                </tr>
                <tr>
                    <td>Wynagrodzenie</td>
                    <!-- <td>{contract.subjectName}</td> -->
                    <td></td>
                    {#each contracts as contract, i}
                        <td>{Number(contract.hoursWorked)*Number(contract.hourlyRate)}</td>
                    {/each}
                    </tr>
            </tbody>
        </table>
    </div>
</div>
