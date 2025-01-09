import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'biografiaCover',
  title: 'Biografia Cover',
  type: 'document',
  fields: [
    defineField({
      name: 'id',
      title: 'Id',
      type: 'number',
    }),
    defineField({
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'id',
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
        name: 'text',
        title: 'Text',
        type: 'string',
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
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
