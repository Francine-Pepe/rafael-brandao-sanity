import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'post',
  title: 'Post',
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
      name: 'date',
      title: 'Date',
      type: 'date',
      options: {
        dateFormat: 'DD-MM-YYYY',
      },
    }),
    defineField({
      name: 'eventHour',
      title: 'Event hour',
      type: 'string',
    }),
    {
      name: 'eventTitle',
      type: 'object',
      title: 'Event Title',
      description: 'The title of the event in different languages.',
      fields: [
        {
          name: 'pt',
          type: 'string',
          title: 'Portuguese',
        },
        {
          name: 'en',
          type: 'string',
          title: 'English',
        },
        {
          name: 'de',
          type: 'string',
          title: 'German',
        },
      ],
    },
    {
      name: 'body',
      title: 'Body',
      type: 'object',
      fields: [
        {
          name: 'pt',
          title: 'Portuguese',
          type: 'array',
          of: [{type: 'block'}],
        },
        {
          name: 'en',
          title: 'English',
          type: 'array',
          of: [{type: 'block'}],
        },
        {
          name: 'de',
          title: 'German',
          type: 'array',
          of: [{type: 'block'}],
        },
      ],
    },
    defineField({
      name: 'link',
      title: 'Link',
      type: 'url',
    }),

    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'},
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    }),
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
