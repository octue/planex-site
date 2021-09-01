import React from 'react'
import { makeStyles } from '@material-ui/core'
import Box from '@material-ui/core/Box'

const useStyles = makeStyles((theme) => {
  console.log('THEME BREAKS', theme.breakpoints.down('xs'))
  return {
    sectionsBox: {
      backgroundColor: theme.palette.background.default,
      '& section': {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
      },
      '& > :first-child': {
        paddingTop: theme.spacing(16),
      },
      '& > :last-child': {
        paddingBottom: theme.spacing(12),
      },
      paddingBottom: theme.spacing(8),
    },
  }
})

const SectionManager = ({ children, ...rest }) => {
  const classes = useStyles()

  return (
    <Box className={classes.sectionsBox} {...rest}>
      {children}
    </Box>
  )
}

export default SectionManager
