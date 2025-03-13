import {defineConfig, defineField} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {vercelDeployTool} from 'sanity-plugin-vercel-deploy'
import {media} from 'sanity-plugin-media'
import {codeInput} from '@sanity/code-input'
import {youtubeInput} from 'sanity-plugin-youtube-input'
import {myYoutubeVideos} from './environment'
import {muxInput} from 'sanity-plugin-mux-input'
import {documentInternationalization} from '@sanity/document-internationalization'

export default defineConfig({
  name: 'default',
  title: 'Rafael-Brandao',
  projectId: '564knp01',
  dataset: 'production',

  plugins: [
    structureTool(),
    visionTool(),
    vercelDeployTool(),
    media(),
    codeInput(),
    youtubeInput({apiKey: `${myYoutubeVideos}`}),
    muxInput(),
    documentInternationalization({
      supportedLanguages: [
        {id: 'pt', title: 'Portuguese'},
        {id: 'en', title: 'English'},
        {id: 'de', title: 'German'},
      ],
      schemaTypes: ['biografia'],
      languageField: `language`,
    }),
  ],

  schema: {
    types: schemaTypes,
  },

  studioHost: 'rafaelbrandao',
})
