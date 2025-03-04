export default {
  name: 'article',
  type: 'document',
  title: 'Article',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'content',
      type: 'object',
      title: 'Content',
      fields: [
        {name: 'en', type: 'array', title: 'English', of: [{type: 'block'}]},
        {name: 'pt', type: 'array', title: 'Português', of: [{type: 'block'}]},
      ],
    },
  ],
}
