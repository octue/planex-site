import React from 'react'
import { makeStyles } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Image from '../../../assets/images/hexagon/Hero6.png'
import { SectionHeading } from '../../elements'
import HexagonGrid from '../../hexagon/HexagonGrid/HexagonGrid'

const useStyles = makeStyles((theme) => ({
  bgColor: {
    backgroundColor: theme.palette.background.default,
  },
  container: {
    height: '100%',
    paddingTop: '202px',
    [theme.breakpoints.down('sm')]: {
      paddingTop: '100px',
    },
  },
  parentBox: {
    marginLeft: '60px',
    maxheight: '434px',
    flexDirection: 'column',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      marginLeft: '0',
    },
  },
  hexagonTitle: {
    // maxWidth: '456px',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  HexagonDetailBox: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
      marginLeft: '0',
    },
  },
  hexagonBox: {
    marginTop: '132px',
    maxWidth: '434px',
    [theme.breakpoints.down('sm')]: {
      marginTop: '50px',
    },
  },
  detailBox: {
    // display: 'flex',
    marginTop: '-40px',
    maxWidth: '590px',
    marginLeft: '221px',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      marginLeft: '0.1rem',
      marginTop: '10px',
    },
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
    marginTop: '24px',
  },
  titleBox: {
    marginBottom: '16px',
  },
  bgBox: {
    border: '1px solid white',
    maxWidth: '590px',
  },
}))
const DataServices = () => {
  const classes = useStyles()
  const gridObjectXY = [
    {
      x: 3,
      y: 1,
      image: Image,
    },
    {
      x: 4,
      y: 1,
      image: Image,
    },
    {
      x: 1,
      y: 2,
      image: Image,
    },
    {
      x: 2,
      y: 2,
      image: Image,
    },
  ]
  return (
    <section className={classes.bgColor}>
      <Container maxWidth="lg" className={classes.container}>
        <Box display="flex" className={classes.parentBox}>
          <Box className={classes.hexagonTitle}>
            <Box>
              <SectionHeading text="Data services" />
            </Box>
          </Box>
          <Box className={classes.HexagonDetailBox}>
            <Box className={classes.hexagonBox}>
              <HexagonGrid gridObjectXY={gridObjectXY} />
            </Box>
            <Box className={classes.detailBox}>
              <Box display="flex" className={classes.titleBox}>
                <Typography variant="subtitle1" color="textPrimary">
                  Create (or wrap an existing) analysis code to function
                  reliably as an on-demand data service
                </Typography>
              </Box>
              <Box display="flex">
                <Typography
                  variant="body1"
                  color="textSecondary"
                  component="span"
                  className={classes.descriptionTitle}
                >
                  Start working together.
                </Typography>
              </Box>
              <Box display="flex" pb={2}>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  component="span"
                >
                  Your engineering team has developed chunks of code for data
                  analysis. These need to be wrapped up so that your customers
                  and other teams/project stakeholders can see, understand and
                  use them easily.
                </Typography>
              </Box>
              <Box display="flex">
                <Typography
                  variant="body1"
                  color="textSecondary"
                  component="span"
                  className={classes.descriptionTitle}
                >
                  How to begin
                </Typography>
              </Box>
              <Box display="flex" pb={2}>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  component="span"
                >
                  Place a flag in the ground. The quickest way to cut through
                  the uncertainty and get everybody on the same page is to write
                  down “what goes in, what comes out”. We’ll use the `twined`
                  library to help you do that, then show you how to wrap your
                  code up with a bow on it and deploy it easily and quickly.
                </Typography>
              </Box>
              <Box display="flex" pb={2}>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  component="span"
                >
                  Your partners will love you, because it’ll be crystal clear
                  what data they’ll be getting.
                </Typography>
              </Box>

              <Box display="flex" className={classes.btnBox}>
                <Button className={classes.cta} variant="outlined">
                  Start twinning
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </section>
  )
}

export default DataServices
