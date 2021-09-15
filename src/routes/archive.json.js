/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export async function get() {
	const archive = {
		shows: ['test']
	};

	if (archive) {
		return {
			body: {
				archive
			}
		};
	}
}
