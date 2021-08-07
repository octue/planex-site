import React from 'react'
import { makeStyles } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import { SectionHeading } from '../../elements'

const useStyles = makeStyles((theme) => ({
  bgColor: {
    backgroundColor: theme.palette.background.default,
  },
  container: {
    height: '100%',
    paddingTop: '235px',
  },
  parentBox: {
    marginLeft: '60px',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      marginLeft: '0',
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
const ValidateCreateCommunicate = () => {
  const classes = useStyles()
  return (
    <section className={classes.bgColor}>
      <Container maxWidth="lg" className={classes.container}>
        <Box display="flex" className={classes.parentBox}>
          <Box className={classes.hexagonTitle}>
            <Box>
              <SectionHeading text="Validate, create, communicate" />
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
                  And whatever you build will be shareable and scalable, so
                  others can build on your work.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </section>
  )
}

export default ValidateCreateCommunicate
