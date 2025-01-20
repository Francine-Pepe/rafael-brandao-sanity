import {defineField, defineType} from 'sanity'
import getYoutubeId from 'get-youtube-id';
import Youtube from 'react-youtube';

export default defineType({
  name: 'youtubeEmbed',
  title: 'Youtube Videos',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'url',
      type: 'url',
      title: 'YouTube Video URL'
    },
    {
      name: 'autoplay',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'controls',
      type: 'boolean',
      initialValue: true,
    },
  ],

  preview: {
    select: {
      title: 'title',
      image: 'url',
      url: 'url',
    },
  },
})
