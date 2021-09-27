<script context="module" lang="ts">
	import ArchivePlayButton from '$lib/components/ArchivePlayButton.svelte';
	import Arrow from '$lib/components/Arrow.svelte';
	import type { LoadInput } from '@sveltejs/kit';

	export async function load({
		fetch
	}: LoadInput): Promise<{ error: Error; status: number } | { props: { archive: unknown } }> {
		const url = '/archive/archive.json';
		const res = await fetch(url);

		if (res.ok) {
			return {
				props: {
					archive: await res.json()
				}
			};
		}

		return {
			status: res.status,
			error: new Error(`Could not load ${url}`)
		};
	}

	export function formatShowName(name: string): string {
		return name.split(' - ')[0] + ' (' + name.split(' - ')[1].replace(/\//g, '.') + ')';
	}

	type Tag = {
		key: string;
		url: string;
		name: string;
	};

	export function formatTags(tags: Tag[]): string {
		return tags
			.map((tag) => tag.name)
			.slice(0, 3)
			.join(', ');
	}

	export function formatKey(key: string): string {
		return key.split('/')[2];
	}
</script>

<script lang="ts">
	export let archive;
	export let showPlayingKey = '';

	export function playShow(key: string): void {
		showPlayingKey = key;
	}
</script>

<div class="container max-w-5xl">
	<h1 class="font-mono uppercase text-8xl px-8 py-10">Archive</h1>
	<div>
		<ul>
			{#each archive.data as { key, url, name, tags }}
				<li class="mx-10 py-6 border-b-2 border-black grid grid-cols-12">
					<div on:click={playShow(key)} class="inline-block px-7 align-middle col-span-1">
						<ArchivePlayButton />
					</div>
					<div class="inline-block pl-8 col-span-6 align-middle pt-1">
						<a href="/archive/{formatKey(key)}">{formatShowName(name)}</a>
					</div>
					<div class="inline-block align-middle col-span-4 pt-1 pl-16">
						{formatTags(tags)}
					</div>
					<div class="inline-block align-middle col-span-1 pt-1 pl-10"><Arrow /></div>
				</li>
			{/each}
		</ul>
	</div>
</div>
{#if showPlayingKey}
	<footer>
		<div class="fixed bottom-0 w-full">
			<iframe
				width="100%"
				height="60"
				src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&light=1&autoplay=1&feed={showPlayingKey}"
				frameborder="0"
			/>
		</div>
	</footer>
{/if}
