import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  gradient: {
    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
    height: '6px',
    width: '100%',
    border: 'none',
  },
}))

function GradientStripe() {
  const classes = useStyles()
  return (<div className={classes.gradient} />)
}

export default GradientStripe
