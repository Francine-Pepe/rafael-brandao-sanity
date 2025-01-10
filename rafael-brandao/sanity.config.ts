import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import { vercelDeployTool } from 'sanity-plugin-vercel-deploy'
import {media} from 'sanity-plugin-media'
import {codeInput} from '@sanity/code-input'


export default defineConfig({
  name: 'default',
  title: 'Rafael-Brandao',

  projectId: '564knp01',
  dataset: 'production',

  plugins: [structureTool(), visionTool(), vercelDeployTool(), media(), codeInput()],

  schema: {
    types: schemaTypes,
  },

  studioHost: 'rafaelbrandao'
})
