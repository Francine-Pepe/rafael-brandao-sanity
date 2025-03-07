export default {
  name: 'modalTranslation',
  type: 'document',
  title: 'Modal Translation',
  fields: [
    {
      name: 'body',
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
