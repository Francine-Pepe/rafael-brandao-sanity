export default {
    name: 'articl',
    type: 'document',
    title: 'Article',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title'
      },
      {
        name: 'content',
        type: 'object',
        title: 'Content',
        fields: [
          { name: 'en', type: 'array', title: 'English', of: [{ type: 'block' }] },
          { name: 'fr', type: 'array', title: 'French', of: [{ type: 'block' }] },
          { name: 'es', type: 'array', title: 'Spanish', of: [{ type: 'block' }] }
        ]
      }
    ]
  };