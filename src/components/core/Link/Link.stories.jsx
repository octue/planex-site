import React from 'react'
import Link from './Link'
import { ThemeProvider } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import { darkTheme } from '../../../themes'
import NavBar from '../../layout/NavBar'
import Box from '@material-ui/core/Box'
import RssFeed from '@material-ui/icons/RssFeed'

export default {
  title: 'Navigation/Link',
  component: Link,
}

const Template = ({ children, ...args }) => {
  return (
    // <Box width="80vw" m={6} border="1px solid #333">
    //   <Box width="100%" m={2}>
    //     <Typography variant="subtitle1" gutterBottom>
    //       {`Kind: ${args.kind}, Variant: ${args.variant}`}
    //     </Typography>
    //   </Box>
    //   <Box m={2}>
    <Link {...args}>{children}</Link>
    //   </Box>
    // </Box>
  )
}

export const SiteLink = Template.bind({})
SiteLink.args = {
  kind: 'site',
  variant: 'typography',
  href: '#',
  children: <>This is an optimised link to a page within this site</>,
}

export const InternalLink = Template.bind({})
InternalLink.args = {
  kind: 'internal',
  variant: 'typography',
  href: 'https://www.octue.com',
  children: (
    <>
      This is an internal link to another octue page, not necessarily this site
    </>
  ),
}

export const ExternalLink = Template.bind({})
ExternalLink.args = {
  kind: 'external',
  variant: 'typography',
  href: 'https://www.github.com',
  children: (
    <>This link to an external (non-octue) site should open a new blank tab</>
  ),
}

export const MUIIconButton = Template.bind({})
MUIIconButton.args = {
  kind: 'site',
  variant: 'iconButton',
  href: '#',
  children: <RssFeed />,
}

export const MUIButton = Template.bind({})
MUIButton.args = {
  kind: 'site',
  variant: 'button',
  href: '#',
  children: (
    <>
      <RssFeed /> Button link with icon
    </>
  ),
}
