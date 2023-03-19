<script lang="ts">
	// import { page } from '$app/stores'
	// import { handleSession } from '@lucia-auth/sveltekit/client'
	import Heading from '$lib/heading.svelte';
	import Drawer from '$lib/drawer.svelte';

	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.postcss';

	// handleSession(page)
</script>

<Heading />
<slot />
<Drawer />
