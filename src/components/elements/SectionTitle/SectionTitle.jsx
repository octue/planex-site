import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  title: {
    color: theme.palette.text.primary,
    marginBottom: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      maxWidth: '26.9rem', // Reduces widows
    },
  },
}))

function SectionTitle({ children }) {
  const classes = useStyles()

  return (
    <Typography variant="h3" className={classes.title}>
      {children}
    </Typography>
  )
}

SectionTitle.defaultProps = {}

SectionTitle.propTypes = {}

export default SectionTitle
