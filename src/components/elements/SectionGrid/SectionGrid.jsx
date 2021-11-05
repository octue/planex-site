import React from 'react'
import { makeStyles } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import SectionContainer from '../../elements/SectionContainer'
import SectionHeading from '../../elements/SectionHeading'
import classNames from 'classnames'

const useStyles = makeStyles((theme) => ({
  headingBox: {
    marginBottom: theme.spacing(2),
  },
  gridDDDContainer: {
    width: '100%',
    justifyContent: 'space-around',
  },
  gridItem: {
    display: 'flex',
    marginBottom: theme.spacing(3),
  },
  centerItem: {
    justifyContent: 'center',
  },
}))

const SectionGrid = ({
  after,
  before,
  centerItems,
  children,
  heading,
  justifyContent,
  spacing,
  xs,
  sm,
  md,
  lg,
  xl,
  ...rest
}) => {
  const classes = useStyles()

  const itemClasses = classNames(classes.gridItem, {
    [classes.centerItem]: centerItems,
  })

  return (
    <SectionContainer {...rest}>
      <Box display="flex" flexDirection="column">
        <Box className={classes.headingBox}>
          <SectionHeading>{heading}</SectionHeading>
        </Box>
        {before}
        <Grid
          container
          spacing={spacing}
          // For some reason the justifyContent prop isn't working. Hack fix...
          style={{ justifyContent: justifyContent }}
        >
          {children &&
            children.map((child) => (
              <Grid
                item
                xs={xs}
                sm={sm}
                md={md}
                lg={lg}
                xl={xl}
                key={child.key}
                className={itemClasses}
              >
                {child}
              </Grid>
            ))}
        </Grid>
        {after}
      </Box>
    </SectionContainer>
  )
}

SectionGrid.defaultProps = {
  after: null,
  before: null,
  centerItems: false,
  spacing: 3,
  justifyContent: 'space-around',
}

export default SectionGrid
