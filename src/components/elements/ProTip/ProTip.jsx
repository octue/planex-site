import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import LightbulbIcon from '../../icons/LightbulbIcon'


const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(6, 0, 3),
  },
  lightBulb: {
    verticalAlign: 'middle',
    marginRight: theme.spacing(1),
  },
}))

export default function ProTip({children}) {
  const classes = useStyles()
  return (
    <Typography className={classes.root} color="textSecondary">
      <LightbulbIcon className={classes.lightBulb} />
      {children}
    </Typography>
  )
}
