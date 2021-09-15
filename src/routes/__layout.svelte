<script>
	import '../app.postcss';
	import HeaderPlayer from '$lib/components/HeaderPlayer.svelte';
	import PlusSign from '$lib/components/PlusSign.svelte';
	import Expand from '$lib/components/Expand.svelte';
	let tv = {
		id: 1,
		title: 'TV',
		content: 'Television',
		active: false,
		pageLink: '/tv'
	};
	let archive = {
		id: 2,
		title: 'Archive',
		content: 'Archive',
		active: false,
		pageLink: '/archive'
	};
	let about = {
		id: 3,
		title: 'About',
		content: 'About',
		active: false,
		pageLink: '/about'
	};

	let sections = [tv, archive, about];
	const expand = (section) => {
		sections = sections.map((s) => {
			s.active = false;
			if (s.id === section.id) {
				s.active = true;
			}
			return s;
		});
	};
</script>

<HeaderPlayer />

<div class="flex float-right border-l border-black bg-white">
	<div class="flex items-center">
		{#each sections as section}
			<div
				class="{section.id !== sections.length ? 'border-r' : ''} border-black h-screen relative"
			>
				{#if section.active}
					<a href={section.pageLink} class="float-right"><Expand /></a>
					<div class="w-64 content-center"><p class="px-4 py-64 text-xl">{section.content}</p></div>
				{:else}
					<div class="w-20">
						<div class="inset-x-0 bottom-24 absolute text-4xl -rotate-90 items-center px-2 py-10">
							<div
								class="px-64 py-2 absolute"
								on:click={() => {
									expand(section);
								}}
							>
								<PlusSign />
							</div>
							<span class="uppercase">{section.title}</span>
						</div>
					</div>
				{/if}
			</div>
		{/each}
	</div>
</div>

<slot />
