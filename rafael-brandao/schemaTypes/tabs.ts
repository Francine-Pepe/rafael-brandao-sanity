import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'tabs',
  title: 'Tabs',
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
      name: 'label',
      title: 'Label',
      type: 'string',
    }),
    {
      name: 'tabsTitle',
      type: 'object',
      title: 'Tabs Title',
      description: 'The title of the tabs in different languages.',
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
        defineField({
          name: 'pt',
          title: 'Portuguese',
          type: 'array',
          of: [{type: 'blockContent'}],
        }),
        defineField({
          name: 'en',
          title: 'English',
          type: 'array',
          of: [{type: 'blockContent'}],
        }),
        defineField({
          name: 'de',
          title: 'German',
          type: 'array',
          of: [{type: 'blockContent'}],
        }),
      ],
    },
  ],

  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
  },
})
