<script lang="ts">
    import { page } from '$app/stores'
    import type { PageData } from './$types'

	export let data: PageData;

    $: ({ contracts } = data);

    let hoursWorkedYearly: number = 0;
    const monthList = [9, 10, 11, 12, 1, 2, 3, 4, 5, 6]
    $: {
        contracts.forEach(contract =>  {
            contract.hoursPerMonth.forEach(month => {
                hoursWorkedYearly += Number(month.hoursWorked)
            })
        })
    }
    let teacherName = $page.params.teacherName;
</script>

<div class="grid grid-rows-2 place-items-center flex-col">
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
                {#each contracts as contract}
                    <tr>
                        <td>Ilość godzin</td>
                        <td>{contract.subjectName}</td>
                        <td>{Number(hoursWorkedYearly)}</td>
                        {#each monthList as month}
                            <td>{Number(contract.hoursPerMonth.find(element => element.month === Number(month))?.hoursWorked)}</td>
                        {/each}
                    </tr>
                    <tr>
                        <td>Wynagrodzenie</td>
                        <td>{contract.subjectName}</td>
                        <td>{Number(hoursWorkedYearly) * Number(contract.hourlyRate)}</td>
                        {#each monthList as month}
                            <td>{Number(contract.hoursPerMonth.find(element => element.month === Number(month))?.hoursWorked)*Number(contract.hourlyRate)}</td>
                        {/each}
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>
</div>
