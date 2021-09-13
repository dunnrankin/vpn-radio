/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export default {
	name: 'episode',
	title: 'Episode',
	type: 'document',
	fields: [
		{
			name: 'show',
			title: 'Show',
			type: 'reference',
			to: { type: 'show' }
		},
		{
			name: 'dateTime',
			title: 'Date & time',
			type: 'datetime',
			options: {
				dateFormat: 'YYYY-MM-DD',
				timeFormat: 'HH:mm',
				timeStep: 15,
				calendarTodayLabel: 'Today'
			}
		},
		{
			name: 'featuredArtist',
			title: 'Featured Artist',
			type: 'array',
			of: [{ type: 'artist' }]
		},
		{
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'dateTime',
				maxLength: 96
			}
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
			name: 'description',
			title: 'Description',
			type: 'blockContent'
		},
		{
			name: 'audioLink',
			title: 'Audio Link',
			type: 'url'
		}
	],

	preview: {
		select: {
			title: 'dateTime',
			show: 'show.title',
			media: 'mainImage'
		},
		prepare(selection) {
			const { title, show } = selection;
			return Object.assign({}, selection, {
				title: `${title.split('T')[0]}`,
				subtitle: show && `${show}`
			});
		}
	}
};
