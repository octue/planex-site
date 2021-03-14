import React from 'react'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import BasicPage from '../components/layout/BasicPage'

import { ContactForm } from '../containers/forms'

export default function Contact() {
  const footerProps = {
    kind: 'big',
  }

  return (
    <BasicPage offset pt={6} pb={8} px={2} footerProps={footerProps}>
      <Container maxWidth="sm">
        <Typography gutterBottom variant="h4" color="primary">
          Contact Us
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Drop us a message, we'd love to hear what you're working on...
        </Typography>
        <ContactForm />
      </Container>
    </BasicPage>
  )
}
