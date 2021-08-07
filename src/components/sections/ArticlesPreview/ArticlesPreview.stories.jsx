import React from 'react'
import ArticlesPreview from './ArticlesPreview'

export default {
  title: 'Sections/ArticlesPreview',
  component: ArticlesPreview,
}
const Template = ({ ...args }) => {
  return (
    <>
      <ArticlesPreview />
    </>
  )
}

export const Basic = Template.bind({})
Basic.args = {}
