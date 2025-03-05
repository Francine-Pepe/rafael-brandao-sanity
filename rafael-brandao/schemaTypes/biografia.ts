import {object} from 'prop-types'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'biografia',
  title: 'Biografia',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title - Português',
      type: 'string',
    }),
    defineField({
      name: 'title_en',
      title: 'Title - English',
      type: 'string',
    }),
    defineField({
      name: 'title_de',
      title: 'Title - Deutsch',
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
      title: 'Body - Português',
      type: 'blockContent',
    }),
    defineField({
      name: 'body_en',
      title: 'Body - English',
      type: 'blockContent',
    }),
    defineField({
      name: 'body_de',
      title: 'Body - Deutsch',
      type: 'blockContent',
    }),
    defineField({
      name: 'language',
      type: 'string',
      readOnly: true,
      hidden: true,
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
