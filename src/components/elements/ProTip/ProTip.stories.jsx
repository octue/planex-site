import React from 'react'
import ProTip from './ProTip'
import { Link } from 'gatsby-theme-material-ui'
import Typography from '@material-ui/core/Typography'


export default {
  title: 'Elements/ProTip',
  component: ProTip,
  parameters: {
    layout: 'fullscreen',
  }
}


export const Simple = (args) => {
  const link = <Link href="https://material-ui.com/getting-started/templates/">templates</Link>
  return (
    <ProTip {...args} >
      <Typography>
        {`Pro tip: See more in the `}
        {link}
        {'.'}
      </Typography>
    </ProTip>
  )
}
