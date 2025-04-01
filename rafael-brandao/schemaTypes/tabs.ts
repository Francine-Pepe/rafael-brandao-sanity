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
    {
      name: 'body',
      title: 'Videos description',
      description: 'Here you can describe what Videos is about',
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
        {
          name: 'pt',
          type: 'array',
          title: 'Portuguese',
          of: [
            {
              type: 'block', // Standard text block
            },
            {
              type: 'youtube', // Custom YouTube block
            },
          ],
        },
        {
          name: 'en',
          type: 'array',
          title: 'English',
          of: [
            {
              type: 'block', // Standard text block
            },
            {
              type: 'youtube', // Custom YouTube block
            },
          ],
        },
        {
          name: 'de',
          type: 'array',
          title: 'German',
          of: [
            {
              type: 'block', // Standard text block
            },
            {
              type: 'youtube', // Custom YouTube block
            },
          ],
        },
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
