import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {myStructure} from './deskStructure'

export default defineConfig({
  name: 'default',
  title: 'Sanity Project',

  projectId: 'fac5jttd',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: myStructure,
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
