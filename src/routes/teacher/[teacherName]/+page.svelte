<script lang="ts">
    import { page } from '$app/stores'
    import type { PageData } from './$types';
	export let data: PageData;
    $: ({ contracts } = data);

    contracts.map(getMonthlyHours);
    
    function getMonthlyHours(contract: contract) {
        let contractMonth = contract.month;
        let contractHours = contract.hoursWorked;
        return {contractMonth: contractHours}
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
                    
                    </tr>
                    <tr>
                        <td>Wynagrodzenie</td>
                        <td>{contract.subjectName}</td>
                        <td></td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>
</div>
