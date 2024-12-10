import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'date',
  title: 'Date',
  type: 'document',
  fields: [
    defineField({
      name: 'date',
      title: 'Date',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
  ],
})
