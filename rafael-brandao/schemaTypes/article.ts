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
      name: 'content',
      type: 'object',
      title: 'Content',
      fields: [
        {name: 'en', type: 'array', title: 'English', of: [{type: 'block'}]},
        {name: 'es', type: 'array', title: 'Spanish', of: [{type: 'block'}]},
      ],
    },
  ],
}
