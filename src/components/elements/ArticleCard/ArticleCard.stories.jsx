import React from 'react'

import ArticleCard from './ArticleCard'

export default {
  title: 'Elements/ArticleCard',
  component: ArticleCard,
}
const Template = () => {
  return (
    <>
      <ArticleCard />
    </>
  )
}

export const Basic = Template.bind({})
Basic.args = {}
