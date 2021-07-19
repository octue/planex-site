import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles, useTheme } from '@material-ui/core'
import Box from '@material-ui/core/Box'

const useStyles = makeStyles((theme) => ({
  title: {
    display: 'flex',
    color: theme.palette.text.primary,
    fontSize: '48px',
    fontWeight: 400,
    lineHeight: '56px',
  },
}))
const SectionHeading = ({ text }) => {
  const classes = useStyles()
  return (
    <>
      <Box>
        <Typography variant="h1" component="h1" className={classes.title}>
          {text}
        </Typography>
      </Box>
    </>
  )
}

SectionHeading.defaultProps = {
  text: 'Build The App Now',
}

export default SectionHeading
