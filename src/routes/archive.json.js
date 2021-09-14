export default async function get({ params }) {
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
