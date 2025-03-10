export default {
  name: 'textTranslation',
  type: 'document',
  title: 'Text Translation',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
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
      name: 'textTranslation',
      type: 'object',
      title: 'Content',
      fields: [
        {name: 'pt', type: 'array', title: 'Portuguese', of: [{type: 'block'}]},
        {name: 'en', type: 'array', title: 'English', of: [{type: 'block'}]},
        {name: 'de', type: 'array', title: 'German', of: [{type: 'block'}]},
      ],
    },
  ],
}
