import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'imageGallery',
  title: 'Image Gallery',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
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
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'alt',
      title: 'Alt',
      type: 'string',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
  },
})
