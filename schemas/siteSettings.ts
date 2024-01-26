import {defineType, defineField} from 'sanity'

export const themeOptions = defineType({
  name: 'themeOptions',
  title: 'Theme Options',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      readOnly: true,
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'block',
        },
        {
          type: 'object',
          name: 'imageObject',
          title: 'Image',
          fields: [
            {
              name: 'alt',
              type: 'text',
              title: 'Alternative text',
              description: `Some of your visitors cannot see images, 
              be they blind, color-blind, low-sighted; 
              alternative text is of great help for those 
              people that can rely on it to have a good idea of 
              what\'s on your page.`,
            },
          ],
          options: {
            collapsible: true,
            collapsed: true,
          },
        },
      ],
    }),
  ],
})
