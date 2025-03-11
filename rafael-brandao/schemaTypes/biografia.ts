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
      validation: (Rule) => Rule.required(),
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

    // Translatable Body Content

    /* defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }), */
    /*   defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'lang',
              title: 'Language',
              type: 'string',
            }),
            defineField({
              name: 'content',
              title: 'Content',
              type: 'blockContent',
            }),
          ],
        },
      ],
    }), */

    defineField({
      name: 'body',
      title: 'Body',
      type: 'object',
      fields: [
        defineField({
          name: 'pt',
          title: 'Português',
          type: 'blockContent',
        }),
        defineField({
          name: 'en',
          title: 'English',
          type: 'blockContent',
        }),
        defineField({
          name: 'de',
          title: 'Deutsch',
          type: 'blockContent',
        }),
      ],
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
