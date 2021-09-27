<script context="module" lang="ts">
	import type { LoadInput } from '@sveltejs/kit';

	export async function load({
		page,
		fetch
	}: LoadInput): Promise<{ error: Error; status: number } | { props: { show: unknown } }> {
		const url = `/archive/${page.params.slug}.json`;
		const res = await fetch(url);

		if (res.ok) {
			return {
				props: {
					show: await res.json()
				}
			};
		}

		return {
			status: res.status,
			error: new Error(`Could not load ${url}`)
		};
	}
</script>

<script>
	export let show;
</script>

<div class="container max-w-4xl">
	<div class="text-xl px-10 py-10">{show.name}</div>
</div>
