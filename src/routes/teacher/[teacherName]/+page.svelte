<script lang="ts">
    import { page } from '$app/stores'
    import type { PageData } from './$types';
	export let data: PageData;
    $: ({ contracts, october, september, november, december, january, february, march, april, may, june } = data);

    export let teacherName = $page.params.teacherName;
</script>

<div class="flex justify-start flex-col">
    <h3>{teacherName}</h3>
    <div>
        <table class="table">
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
                {#each contracts as contract, i}
                <tr>
                    <td>Ilość godzin</td>
                    <td>{contract.subjectName}</td>
                    <td></td>
                    <td>
                        {#if september[i] === undefined}
                            0
                        {:else}
                            {Number(september[i].hoursWorked)}
                        {/if}
                    </td>
                    <td>
                        {#if october[i] === undefined}
                            0
                        {:else}
                            {Number(october[i].hoursWorked)}
                        {/if}
                    </td>
                    <td>
                        {#if november[i] === undefined}
                            0
                        {:else}
                            {Number(november[i].hoursWorked)}
                        {/if}
                    </td>
                    <td>
                        {#if december[i] === undefined}
                            0
                        {:else}
                            {Number(december[i].hoursWorked)}
                        {/if}
                    </td>
                    <td>
                        {#if january[i] === undefined}
                            0
                        {:else}
                            {Number(january[i].hoursWorked)}
                        {/if}
                    </td>
                    <td>
                        {#if february[i] === undefined}
                            0
                        {:else}
                            {Number(february[i].hoursWorked)}
                        {/if}
                    </td>
                    <td>
                        {#if march[i] === undefined}
                            0
                        {:else}
                            {Number(march[i].hoursWorked)}
                        {/if}
                    </td>
                    <td>
                        {#if april[i] === undefined}
                            0
                        {:else}
                            {Number(april[i].hoursWorked)}
                        {/if}
                    </td>
                    <td>
                        {#if may[i] === undefined}
                            0
                        {:else}
                            {Number(may[i].hoursWorked)}
                        {/if}
                    </td>
                    <td>
                        {#if june[i] === undefined}
                            0
                        {:else}
                            {Number(june[i].hoursWorked)}
                        {/if}
                    </td>
                </tr>
                <tr>
                    <td>Wynagrodzenie</td>
                    <td>{contract.subjectName}</td>
                    <td></td>
                    <td>
                        {#if september[i] === undefined}
                            0
                        {:else}
                            {Number(september[i].hoursWorked)*Number(contract.hourlyRate)}
                        {/if}
                    </td>
                    <td>
                        {#if october[i] === undefined}
                            0
                        {:else}
                            {Number(october[i].hoursWorked)*Number(contract.hourlyRate)}
                        {/if}
                    </td>
                    <td>
                        {#if november[i] === undefined}
                            0
                        {:else}
                            {Number(november[i].hoursWorked)*Number(contract.hourlyRate)}
                        {/if}
                    </td>
                    <td>
                        {#if december[i] === undefined}
                            0
                        {:else}
                            {Number(december[i].hoursWorked)*Number(contract.hourlyRate)}
                        {/if}
                    </td>
                    <td>
                        {#if january[i] === undefined}
                            0
                        {:else}
                            {Number(january[i].hoursWorked)*Number(contract.hourlyRate)}
                        {/if}
                    </td>
                    <td>
                        {#if february[i] === undefined}
                            0
                        {:else}
                            {Number(february[i].hoursWorked)*Number(contract.hourlyRate)}
                        {/if}
                    </td>
                    <td>
                        {#if march[i] === undefined}
                            0
                        {:else}
                            {Number(march[i].hoursWorked)*Number(contract.hourlyRate)}
                        {/if}
                    </td>
                    <td>
                        {#if april[i] === undefined}
                            0
                        {:else}
                            {Number(april[i].hoursWorked)*Number(contract.hourlyRate)}
                        {/if}
                    </td>
                    <td>
                        {#if may[i] === undefined}
                            0
                        {:else}
                            {Number(may[i].hoursWorked)*Number(contract.hourlyRate)}
                        {/if}
                    </td>
                    <td>
                        {#if june[i] === undefined}
                            0
                        {:else}
                            {Number(june[i].hoursWorked)*Number(contract.hourlyRate)}
                        {/if}
                </tr>
                {/each}
            </tbody>
        </table>
    </div>
</div>
