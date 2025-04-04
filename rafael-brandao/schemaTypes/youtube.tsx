import {defineType, defineField} from 'sanity'
import {PlayIcon} from '@sanity/icons'
import {YouTubePreview} from './YouTubePreview'

export const youtube = defineType({
  name: 'youtube',
  type: 'object',
  title: 'YouTube Embed',
  icon: PlayIcon,
  fields: [
    defineField({
      name: 'url',
      type: 'url',
      title: 'YouTube Video URL',
    }),
  ],
  preview: {
    select: {
      title: 'url',
      url: 'url',
    },
  },
  components: {
    preview: YouTubePreview,
  },
})
