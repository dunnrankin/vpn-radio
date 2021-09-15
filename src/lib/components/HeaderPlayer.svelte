<script>
	import PlayButton from '$lib/components/PlayButton.svelte';
	import PauseButton from '$lib/components/PauseButton.svelte';
	import OnAir from '$lib/components/OnAir.svelte';
	let paused = true;
	const togglePaused = () => {
		paused = !paused;
	};
</script>

<div class="relative bg-black">
	<audio bind:paused src="https://streaming.radio.co/s9f2323f0d/listen" />
	<div class="max-w-full mx-auto py-4 px-6 sm:px-6 lg:px-8">
		{#if paused}
			<div on:click={() => togglePaused()}>
				<PlayButton />
			</div>
		{:else}
			<div on:click={() => togglePaused()}>
				<PauseButton />
			</div>
		{/if}
		<div class="float-right absolute inset-y-0 right-0 w-64 bg-white border border-black">
			<div class="px-2 py-4"><OnAir /></div>
		</div>
	</div>
</div>
