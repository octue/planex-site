import React from 'react'
import { makeStyles } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import { SectionHeading, SectionContainer } from '../../elements'

const useStyles = makeStyles((theme) => ({
  parentBox: {
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  hexagonTitle: {
    maxWidth: '456px',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  detailBox: {
    maxWidth: '590px',
    marginLeft: '190px',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      marginLeft: '0.1rem',
    },
  },
  titleBox: {
    marginBottom: '10px',
  },
}))

const ValidateCreateCommunicate = (rest) => {
  const classes = useStyles()

  return (
    <SectionContainer {...rest}>
      <Box display="flex" className={classes.parentBox}>
        <Box className={classes.hexagonTitle}>
          <Box>
            <SectionHeading>Validate, create, communicate</SectionHeading>
          </Box>
        </Box>
        <Box className={classes.detailBox}>
          <Box>
            <Box display="flex" className={classes.titleBox}>
              <Typography variant="subtitle1" color="textPrimary">
                With this fundamental set of operations in place, it’s much
                quicker and easier to access, assess and analyse data, and to
                create data services like digital twins.
              </Typography>
            </Box>
            <Box display="flex" pb={4}>
              <Typography
                variant="body1"
                color="textSecondary"
                component="span"
              >
                And whatever you build will be shareable and scalable, so others
                can build on your work.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </SectionContainer>
  )
}

export default ValidateCreateCommunicate
