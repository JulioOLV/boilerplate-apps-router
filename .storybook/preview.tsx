import React from 'react'
import type { Preview } from '@storybook/nextjs'
import GlobalStyles from '../src/styles/global'

export const decorators = [
  (Story) => (
    <>
      <GlobalStyles />
      <Story />
    </>
  )
]

const preview: Preview = {
  tags: ['autodocs']
}

export default preview
