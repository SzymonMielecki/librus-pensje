<script lang="ts">
	import Sidebar from '$lib/sidebar.svelte';
	import Heading from '$lib/heading.svelte';
	import '../app.postcss';
</script>

<svelte:head>
	<title>Techni-pensje</title>
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<link rel="icon" type="image/png" href="/favicon.png" />
</svelte:head>


<div class="flex">
	<Sidebar />
	<div class="flex-grow">
		<Heading />
		<slot />
	</div>
</div>