/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { variables } from '$lib/variables';
export async function get() {
	const res = await fetch(variables.mixcloudApiUrl)

	if (res.ok) {
		return {
			body: await res.json()
		}
	}
}
