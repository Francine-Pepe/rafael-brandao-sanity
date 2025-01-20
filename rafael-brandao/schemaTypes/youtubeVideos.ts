const youtubeVideos = {
  title: 'Youtube Videos',
  name: 'youtubeVideos',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: {required: () => any}) => Rule.required(), // Mark title as required
    },
    {
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
        },
        {
          type: 'file',
        },
        {
          type: 'mux.video',
        },
      ],
      validation: (Rule: {required: () => any}) => Rule.required(), // Mark body as required
    },
  ],
}

export default youtubeVideos;
