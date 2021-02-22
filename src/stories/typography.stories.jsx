import React from 'react'
import Typography from '@material-ui/core/Typography'

export default {
  title: 'Themes/Typography',
}

export const MUITypography = ({ color, gutterBottom }) => {
  const variants = [
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'overline',
    'subtitle',
    'body1',
    'body2',
    'caption',
  ]
  return (
    <div>
      {variants.map((variant) => (
        <Typography
          variant={variant}
          color={color}
          gutterBottom={gutterBottom}
        >{`Typography variant ${variant}`}</Typography>
      ))}
    </div>
  )
}
MUITypography.args = {
  color: 'textPrimary',
  gutterBottom: true,
}
MUITypography.storyName = 'Typography'
