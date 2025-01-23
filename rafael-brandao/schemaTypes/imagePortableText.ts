export default {
  type: 'object',
  name: 'imagePortableText',
  title: 'Image',
  fields: [
    {
      name: 'asset',
      type: 'reference',
      to: [{type: 'image'}],
      title: 'Image Asset',
    },
    {
      name: 'alt',
      type: 'string',
      title: 'Alt Text',
    },
  ],
}
