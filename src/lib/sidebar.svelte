<script>
	import { scale, fly, crossfade } from 'svelte/transition';
	import {
		Home,
		SidebarClose,
		SidebarOpen,
		UserPlus2
	} from 'lucide-svelte';
	import { Calendar, Newspaper, Users, Edit, ListPlus, Contact, Album, Book } from 'lucide-svelte';

	import { cubicOut } from 'svelte/easing';
	import { page } from '$app/stores';

	let expanded = false;

	let items = [
		{
			icon: Home,
			label: 'Strona głowna',
			href: '/'
		},
		{
			icon: Calendar,
			label: 'Umowy',
			href: '/contractsView'
		},
		{
			icon: Album,
			label: 'Kategorie',
			href: '/categoriesView'
		},
		{
			icon: Contact,
			label: 'Typy pracowników',
			href: '/contractEmployeeTypeView'
		},
		{
			icon: UserPlus2,
			label: 'Pracownicy',
			href: '/employeesView'
		},
		{
			icon: Edit,
			label: 'Usługi',
			href: '/servicesView'
		}
	];
	const [send, receive] = crossfade({});
</script>

<div
	class="h-screen border-r border-subtle transition-all px-[1.4rem] w-[5.5rem] flex flex-col gap-8 py-12 data-[expanded=true]:w-56 sticky top-0 left-0"
	data-expanded={expanded}
>
	<div class="flex items-center gap-4">
		{#if expanded}
			<a
				in:fly|local={{ x: -10, duration: 400 }}
				href="/"
				on:click|stopPropagation
				aria-label="Go to home page"
				class="text-center w-fit font-bold p-2 focus-visible:ring-2 focus-visible:outline-none rounded-xl transition ring-offset-base-50 dark:ring-offset-base-950 focus-visible:ring-primary-600 whitespace-nowrap"
			>
				Librus Pensje</a
			>
		{/if}
		<button on:click={() => (expanded = !expanded)} class="btn btn-ghost p-3 h-fit w-fit ml-auto">
			{#if expanded}
				<span in:scale|local>
					<SidebarClose size={20} />
				</span>
			{:else}
				<span in:scale|local>
					<SidebarOpen size={20} />
				</span>
			{/if}
		</button>
	</div>
	<nav>
		<ul class="flex flex-col gap-3 items-center">
			{#each items as item}
				{@const current = $page.url.pathname === item.href}
				<li class="w-full">
					<a
						href={item.href}
						aria-current={current}
						aria-label={item.label}
						class="relative btn btn-text h-11 p-0 {expanded ? 'w-48 transition-[width]' : 'w-11'}"
					>
						<span
							class="absolute text-sm inset-0 flex {expanded
								? 'justify-start'
								: 'justify-center'} items-center gap-3 p-3 z-[2]"
						>
							<span>
								<svelte:component this={item.icon} size={20} />
							</span>

							{#if expanded}
								<span in:fly|local={{ x: -10, duration: 300 }} class="whitespace-nowrap"
									>{item.label}</span
								>
							{/if}
						</span>
						{#if current}
							<div
								in:receive|local={{
									key: 'background',
									easing: cubicOut,
									duration: 200
								}}
								out:send|local={{ key: 'background', easing: cubicOut, duration: 200 }}
								class="w-full h-full rounded-xl bg-base-300/50 dark:bg-base-800/50"
							/>
						{/if}
					</a>
				</li>
			{/each}
		</ul>
	</nav>
</div>
