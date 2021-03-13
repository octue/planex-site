import React from 'react'
import { ThemeProvider } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import { NavBar, NavItems } from '../components/layout/NavBar'
import BasicPage from '../components/layout/BasicPage'

import { lightTheme, darkTheme } from '../themes'
import { Footer } from '../components/layout'

import { ContactForm } from '../containers/forms'

export default function Contact() {
  const footerProps = {
    kind: 'big',
  }

  return (
    <BasicPage py={8} px={2} footerProps={footerProps}>
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
