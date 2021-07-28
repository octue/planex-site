import React from 'react'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import { graphql } from 'gatsby'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import BasicPage from '../containers/layout/BasicPage'
import { ContactForm } from '../containers/forms'

export const query = graphql`
  query ContactPageQuery {
    page: datoCmsContactPage {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
  }
`

export default function Contact({ data }) {
  return (
    <BasicPage offset pt={6} pb={8} px={2}>
      <HelmetDatoCms seo={data.page.seoMetaTags} />
      <Container maxWidth="sm">
        <Typography gutterBottom variant="h4" color="primary">
          {data.page.heading}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          {data.page.subheading}
        </Typography>
        <ContactForm />
      </Container>
    </BasicPage>
  )
}
