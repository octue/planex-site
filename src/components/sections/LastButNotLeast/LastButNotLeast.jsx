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
    width: '50%',
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
  mediaLarge: {
    height: 393,
    borderRadius: theme.shape.borderRadius,
    width: '100%',
  },
  titleBox: {
    marginBottom: '32px',
  },
  descriptionTitle: {
    fontWeight: 400,
  },
  cta: {
    display: 'flex',
    paddingTop: `8px`,
    paddingBottom: `8px`,
    backgroundColor: `#D31020`,
  },
  btnBox: {
    marginTop: '18px',
  },
}))

const LastButNotLeast = (rest) => {
  const classes = useStyles()
  return (
    <SectionContainer {...rest}>
      <Box display="flex" className={classes.parentBox}>
        <Box className={classes.hexagonTitle}>
          <SectionHeading>Last but not least</SectionHeading>
        </Box>
        <Box className={classes.detailBox}>
          <Box>
            <Box className={classes.titleBox}>
              <Typography variant="subtitle1" color="textPrimary">
                Join the general email list, tweet about us, try it out and let
                us know.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </SectionContainer>
  )
}

export default LastButNotLeast
