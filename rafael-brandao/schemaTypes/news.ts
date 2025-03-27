import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'news',
  title: 'News',
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
      name: 'link',
      title: 'Link',
      type: 'url',
      description: 'Here you can add an external Link to the news.',
    }),
    defineField({
      name: 'date',
      title: 'Created at:',
      type: 'date',
      options: {
        dateFormat: 'DD-MM-YYYY',
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
    {
      name: 'newsTitle',
      type: 'object',
      title: 'News Title',
      description: 'The title of the news in different languages.',
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
          of: [
            {type: 'block'},
            {
              type: 'youtube',
            },
          ],
        },
        {
          name: 'en',
          title: 'English',
          type: 'array',
          of: [
            {type: 'block'},
            {
              type: 'youtube',
            },
          ],
        },
        {
          name: 'de',
          title: 'German',
          type: 'array',
          of: [
            {type: 'block'},
            {
              type: 'youtube',
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
