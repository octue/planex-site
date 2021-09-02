import React from 'react'

import ArticleCard from './ArticleCard'
import { article as articleFixture } from '../../../fixtures'

export default {
  title: 'Elements/ArticleCard',
  component: ArticleCard,
}

const Template = (args) => <ArticleCard {...args} />

export const Basic = Template.bind({})
Basic.args = {
  ...articleFixture,
}
