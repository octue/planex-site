import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Image from '../../../assets/images/hexagon/Hero.png'
import SectionHeading from '../SectionHeading'
import SectionDetail from '../SectionDetail'
import MultipleHexagonWithImage from '../../hexagon/MultipleHexagonWithImage'

const useStyles = makeStyles((theme) => ({
  bgColor: {
    backgroundColor: theme.palette.background.paper,
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
  hexagonBox: {
    marginTop: '132px',
  },
  detailBox: {
    maxWidth: '590px',
    marginLeft: '190px',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      marginLeft: '0.1rem',
    },
  },
  title: {
    display: 'flex',
    color: theme.palette.text.primary,
    fontSize: '24px',
    fontWeight: 400,
    lineHeight: '30px',
  },
  description: {
    color: theme.palette.text.secondary,
    fontSize: '18px',
    fontWeight: 300,
    lineHeight: '26px',
    // whiteSpace: 'pre-line',
  },
  cta: {
    display: 'flex',
    paddingTop: `8px`,
    paddingBottom: `8px`,
    backgroundColor: `#D31020`,
  },
  btnBox: {
    // marginTop: '24px',
  },
  titleBox: {
    marginBottom: '10px',
  },
}))
const MianPageHexagonSection = () => {
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
            <Box className={classes.hexagonBox}>
              <MultipleHexagonWithImage image={Image} />
            </Box>
          </Box>
          <Box className={classes.detailBox}>
            <Box>
              <Box display="flex" className={classes.titleBox}>
                <Typography
                  variant="h2"
                  component="h1"
                  className={classes.title}
                >
                  You don't need to be a materials scientist to build a LEGO®
                  model.
                </Typography>
              </Box>
              <Box display="flex" pb={3}>
                <Typography
                  variant="subtitle1"
                  component="h2"
                  className={classes.description}
                >
                  So why should someone modelling climate or energy systems need
                  to be an expert coder? Yet scientists waste 95% of their day
                  [Source:McKinsey] being general programmers, API architects
                  and DevOps engineers.
                </Typography>
              </Box>
              <Box display="flex" pb={4}>
                <Typography
                  variant="subtitle1"
                  component="h2"
                  className={classes.description}
                >
                  Our solution: a framework of open-source tools to create,
                  connect, exchange and reuse analysis building blocks.
                </Typography>
              </Box>

              <Box display="flex" className={classes.btnBox}>
                <Button className={classes.cta} variant="outlined">
                  The mission
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </section>
  )
}

export default MianPageHexagonSection
