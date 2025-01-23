import {defineField, defineType} from 'sanity'

export default defineType({
  title: 'Gallery',
  name: 'gallery',
  type: 'array',
  of: [
    {
      type: 'reference',
      to: [{type: 'photo'}],
      name: 'gallery',
      title: 'gallery',
    },
  ],
})
