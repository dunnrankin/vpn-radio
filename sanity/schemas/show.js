export default {
	name: 'show',
	title: 'Show',
	type: 'document',
	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string'
		},
		{
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'title',
				maxLength: 96
			}
		},
		{
			name: 'mainArtist',
			title: 'Main artist',
			type: 'reference',
			to: { type: 'artist' }
		},
		{
			name: 'mainImage',
			title: 'Main image',
			type: 'image',
			options: {
				hotspot: true
			}
		},
		{
			name: 'genres',
			title: 'Genres',
			type: 'array',
			of: [{ type: 'genre' }]
		},
		{
			name: 'description',
			title: 'Description',
			type: 'blockContent'
		}
	],

	preview: {
		select: {
			title: 'title',
			artist: 'mainArtist.name',
			media: 'mainImage'
		},
		prepare(selection) {
			const { artist } = selection;
			return Object.assign({}, selection, {
				subtitle: artist && `by ${artist}`
			});
		}
	}
};
