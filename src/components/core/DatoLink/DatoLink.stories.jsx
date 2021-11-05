import React from 'react'
import RssFeed from '@material-ui/icons/RssFeed'

import MuiLink from '@material-ui/core/Link'
import Button from '@material-ui/core/Button'

import DatoLink from './DatoLink'

export default {
  title: 'Navigation/DatoLink',
  component: DatoLink,
}

const Template = ({ text, ...args }) => {
  return (
    <DatoLink {...args}>
      <MuiLink variant="subtitle1" gutterBottom>
        {text}
      </MuiLink>
    </DatoLink>
  )
}

export const ExternalLink = Template.bind({})
ExternalLink.args = {
  url: 'https://www.github.com',
  openInNewTab: true,
  optimiseInternalLink: false,
  text: 'This link to an external (non-octue) site should open a new blank tab',
}

export const InternalLink = Template.bind({})
InternalLink.args = {
  url: '/about',
  openInNewTab: false,
  optimiseInternalLink: true,
  text: 'This link to an internal site should open in a new blank tab',
}

export const ButtonLink = () => (
  <DatoLink url="/about" openInNewTab={false} optimiseInternalLink={true}>
    <Button
      variant="contained"
      color="primary"
      endIcon={<RssFeed>send</RssFeed>}
    >
      This is how to use a button as a link
    </Button>
  </DatoLink>
)
