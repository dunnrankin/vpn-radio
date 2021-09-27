import { variables } from '$lib/variables';

export async function get({ params }) {
	const { slug } = params;
	console.log(variables.mixcloudBaseUrl + slug);
	const res = await fetch(variables.mixcloudBaseUrl + slug);

	if (res.ok) {
		console.log(res);
		return {
			body: await res.json()
		};
	}
}
