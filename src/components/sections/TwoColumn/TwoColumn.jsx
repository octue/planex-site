import React from 'react'
import { makeStyles } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import { SectionHeading, SectionContainer } from '../../elements'

import Hidden from '@material-ui/core/Hidden'
import DatoModularField from '../../../containers/dato/DatoModularField'

const useStyles = makeStyles((theme) => ({
  parentBox: {
    width: '100%',
    flexWrap: 'wrap',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  sectionHeadingBox: {
    width: '100%',
    flexGrow: 1,
    marginBottom: theme.spacing(8),
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(2),
    },
  },
  column1Box: {
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
  },
  column1ComponentBox: {
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(2),
    },
  },
  column2Box: {
    width: '50%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
}))

const TwoColumn = ({ heading, column1, column2, ...rest }) => {
  const classes = useStyles()

  const headingComponent = heading ? (
    <Box className={classes.sectionHeadingBox}>
      <SectionHeading>{heading}</SectionHeading>
    </Box>
  ) : null

  const column1Component = (
    <Box className={classes.column1ComponentBox}>
      <DatoModularField blocks={column1}></DatoModularField>
    </Box>
  )

  const column2Component = (
    <Box className={classes.column2Box}>
      <DatoModularField blocks={column2}></DatoModularField>
    </Box>
  )
  return (
    <SectionContainer {...rest}>
      <Box display="flex" className={classes.parentBox}>
        <Hidden smDown>
          <Box className={classes.column1Box}>
            {headingComponent}
            {column1Component}
          </Box>
          {column2Component}
        </Hidden>
        <Hidden mdUp>
          {headingComponent}
          {column2Component}
          {column1Component}
        </Hidden>
      </Box>
    </SectionContainer>
  )
}

export default TwoColumn
