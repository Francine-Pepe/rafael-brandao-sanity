import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'gallery',
  type: 'object',
  title: 'Gallery',
  fields: [
    {
      name: 'image',
      type: 'array',
      title: 'Image',
      of: [{type: 'reference'}, {type: 'imageGallery'}]
    },
  ],
})
