export default {
  type: 'document',
  name: 'photo',
  title: 'Photo',
  fields: [
    {type: 'string', name: 'title', title: 'Title'},
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {type: 'string', name: 'alt', title: 'Alt'},
    {name: 'image', type: 'image', title: 'Image'},
  ],
}
