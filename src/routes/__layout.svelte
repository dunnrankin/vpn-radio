<script>
	import '../app.postcss';
	import HeaderPlayer from '$lib/components/HeaderPlayer.svelte';
</script>

<HeaderPlayer />
<div class="flex float-right border-l border-gray-200bg-white overflow-y-auto">
	<div class="flex items-center">
		<div class="border-r h-screen">
			<a href="/tv" class="text-gray-600  hover:text-gray-900 items-center px-8 text-sm font-mono">
				TV
			</a>
		</div>
		<div class="border-r h-screen">
			<a
				href="/archive"
				class="text-gray-600  hover:text-gray-900 items-center px-4 py-4 text-sm font-mono"
			>
				ARCHIVE
			</a>
		</div>
		<div class="border-r h-screen">
			<a
				href="/about"
				class="text-gray-600  hover:text-gray-900 items-center px-4 py-4 text-sm font-mono"
			>
				ABOUT
			</a>
		</div>
	</div>
</div>

<slot />
