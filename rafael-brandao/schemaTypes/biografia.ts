import {object} from 'prop-types'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'biografia',
  title: 'Biografia',
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
    defineField({
      name: 'datas',
      title: 'Datas',
      type: 'string',
    }),
    defineField({
      name: 'country',
      title: 'Country',
      type: 'string',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
    defineField({
      name: 'translations',
      type: 'object',
      title: 'Translations',
      fields: [
        {name: 'pt', type: 'array', title: 'Português', of: [{type: 'blockContent'}]},
        {name: 'en', type: 'array', title: 'English', of: [{type: 'blockContent'}]},
        {name: 'de', type: 'array', title: 'Deutsch', of: [{type: 'blockContent'}]},
      ],
    }),

    defineField({
      name: 'image1',
      title: 'Image 1',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'image2',
      title: 'Image 2',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'image3',
      title: 'Image 3',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],

  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
  },
})
