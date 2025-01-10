import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'gallery',
  title: 'Gallery',
  type: 'array',
  of: [
    {
      title: 'Image',
      type: 'image',
    },
    {
      title: 'Image',
      type: 'object',
      fields: [
        defineField({
          title: 'Title',
          name: 'title',
          type: 'string',
        }),
        defineField({
          name: 'slug',
          title: 'Slug',
          type: 'slug',
          options: {
            source: 'title',
            maxLength: 96,
          },
        }),
        defineField({
          title: 'Image',
          name: 'image',
          type: 'image',
          options: {
            hotspot: true,
          },
        }),
        defineField({
          title: 'Alternative text',
          name: 'alt',
          type: 'string',
        }),
      ],
    },
  ],
})
