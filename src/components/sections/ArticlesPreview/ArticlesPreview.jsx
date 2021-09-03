import React from 'react'
import SectionGrid from '../../elements/SectionGrid'
import ArticleCard from '../../elements/ArticleCard'

const ArticlesPreview = ({ articles, ...rest }) => {
  return (
    <SectionGrid xs={12} sm={6} md={4} centerItems {...rest}>
      {articles && articles.map((article) => <ArticleCard {...article} />)}
    </SectionGrid>
  )
}

export default ArticlesPreview
