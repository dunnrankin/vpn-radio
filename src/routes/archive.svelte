<script context="module">
	export async function load({ page, fetch, session, context }) {
		const url = '/archive.json';
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
</script>

<h1 class="font-mono uppercase text-8xl px-8 py-10">Archive</h1>
