import {PreviewProps} from 'sanity'
import {Flex, Text} from '@sanity/ui'
import YouTube from 'react-youtube'
import getYouTubeId from 'get-youtube-id'

export function YouTubePreview(props: PreviewProps) {
  const {title: url} = props

  return (
    <Flex padding={3} align="center" justify="center">
      {typeof url === 'string' ? (
        <YouTube videoId={getYouTubeId(`${url}`)} />
      ) : (
        <Text>Add a Youtube URL</Text>
      )}
    </Flex>
  )
}
