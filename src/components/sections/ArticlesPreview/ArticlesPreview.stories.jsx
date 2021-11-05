import React from 'react'
import ArticlesPreview from './ArticlesPreview'
import { articlesPreview as articlesPreviewFixture } from '../../../fixtures'

export default {
  title: 'Sections/ArticlesPreview',
  component: ArticlesPreview,
}

const Template = (args) => {
  console.log('ArticlesPreview story rendering with data', args)
  return <ArticlesPreview {...args} />
}

export const Basic = Template.bind({})
Basic.args = { ...articlesPreviewFixture }
