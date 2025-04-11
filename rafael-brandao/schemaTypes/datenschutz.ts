import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'datenschutz',
  title: 'Datenschutz',
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
      validation: (Rule) => Rule.required(),
    }),
    // Translatable Body Content
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
  ],

  preview: {
    select: {
      title: 'title',
    },
  },
})
