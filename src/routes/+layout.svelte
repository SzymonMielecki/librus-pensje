<script lang="ts">
	// import { page } from '$app/stores'
	// import { handleSession } from '@lucia-auth/sveltekit/client'
	import Heading from '$lib/heading.svelte';
	import Drawer from '$lib/drawer.svelte';


	// import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	import '../techni.postcss';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.postcss';

	// handleSession(page)
</script>

<svelte:head>
	<title>Techni-pensje</title>
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<link rel="icon" type="image/png" href="/favicon.png" />
</svelte:head>

<Drawer />
<Heading />
<slot />
