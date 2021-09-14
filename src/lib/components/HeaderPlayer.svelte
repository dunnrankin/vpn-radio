<script>
	import PlayButton from '$lib/components/PlayButton.svelte';
	import PauseButton from '$lib/components/PauseButton.svelte';
	let paused = true;
	const togglePaused = () => {
		paused = !paused;
	};
</script>

<div class="relative bg-gray-800">
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
	</div>
</div>
