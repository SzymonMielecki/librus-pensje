<script lang="ts">
	import { AppBar, LightSwitch, drawerStore } from '@skeletonlabs/skeleton';
	import { Menu } from 'lucide-svelte';

	function drawerOpen(): void {
		drawerStore.open();
	}
</script>

<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
	<svelte:fragment slot="lead">
		<button on:click={drawerOpen}>
			<Menu />
		</button>
	</svelte:fragment>
	Librus Pensje Kalkulator
	<svelte:fragment slot="trail">
		<LightSwitch />
	</svelte:fragment>
</AppBar>
