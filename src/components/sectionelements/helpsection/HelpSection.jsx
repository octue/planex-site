import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Image from '../../../assets/images/hexagon/Hero2.png'
import SectionHeading from '../SectionHeading'
import SectionDetail from '../SectionDetail'
import TripleHexagon from '../../hexagon/TripleHexagon'

const useStyles = makeStyles((theme) => ({
  bgColor: {
    backgroundColor: theme.palette.background.paper,
  },
  container: {
    height: '100%',
    paddingTop: '4rem',
  },
  title: {
    display: 'flex',
    color: theme.palette.text.primary,
    fontSize: '1.5rem',
    fontWeight: 400,
    lineHeight: '2rem',
  },
  boxSubtitle: {
    marginTop: '3rem',
    marginLeft: '2rem',
  },
  parentBox: {
    padding: '1rem 1rem',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      padding: '0',
    },
  },
  hexagonTitle: {
    width: '50%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  hexagonBox: {
    marginTop: '4rem',
  },
  detailBox: {
    marginLeft: '2rem',
    marginTop: '2rem',
    width: '50%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      marginLeft: '0.1rem',
    },
  },
}))

const HelpSection = () => {
  const classes = useStyles()
  const theme = useTheme()
  return (
    <section className={classes.bgColor}>
      <Container maxWidth="lg" className={classes.container}>
        <Box display="flex" className={classes.parentBox}>
          <Box className={classes.hexagonTitle}>
            <Box>
              <SectionHeading text="Be 20x more constructive" />
            </Box>
            <Box className={classes.boxSubtitle}>
              <Typography variant="h3" component="h3" className={classes.title}>
                Get started with Twined
              </Typography>
            </Box>
            <Box className={classes.boxSubtitle}>
              <Typography variant="h3" component="h3" className={classes.title}>
                Get started with Twined
              </Typography>
            </Box>
            <Box className={classes.boxSubtitle}>
              <Typography variant="h3" component="h3" className={classes.title}>
                Get started with Twined
              </Typography>
            </Box>
          </Box>
          <Box className={classes.detailBox}>
            <SectionDetail
              description="So why should someone modelling climate or energy systems need to be an expert coder? Yet scientists waste 95% of their day [Source:McKinsey] being general programmers, API architects and DevOps engineers. Our solution: a framework of open-source tools to create, connect, exchange and reuse analysis building blocks."
              button="Enter the library"
            />
            <Box className={classes.hexagonBox}>
              <TripleHexagon image={Image} />
            </Box>
          </Box>
        </Box>
      </Container>
    </section>
  )
}

export default HelpSection
