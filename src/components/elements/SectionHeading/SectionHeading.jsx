import React from 'react'
import Typography from '../Typography'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  title: {
    color: theme.palette.text.primary,
    marginBottom: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      maxWidth: '70%', // Encourages a wrap in 2-column layouts
    },
  },
}))

function SectionHeading({ children }) {
  const classes = useStyles()

  return (
    <Typography balance variant="h3" className={classes.title}>
      {children}
    </Typography>
  )
}

export default SectionHeading
