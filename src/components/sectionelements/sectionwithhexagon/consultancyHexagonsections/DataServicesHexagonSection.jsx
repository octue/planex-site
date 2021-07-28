import React from 'react'
import { CssBaseline, makeStyles, useTheme } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import classNames from 'classnames'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Image from '../../../../assets/images/hexagon/Hero6.png'
import SectionHeading from '../../SectionHeading'
import ReverseMultipleHexagonWithImage from '../../../../components/hexagon/ReverseMultipleHexagonWithImage'

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
const DataServicesHexagonSection = () => {
  const classes = useStyles()
  const theme = useTheme()

  const descriptionTitleBox = classNames(
    classes.description,
    classes.descriptionTitle
  )
  return (
    <section className={classes.bgColor}>
      <Container maxWidth="lg" className={classes.container}>
        <Box display="flex" className={classes.parentBox}>
          <Box className={classes.hexagonTitle}>
            <Box>
              <SectionHeading text="Digital twins" />
            </Box>
          </Box>
          <Box className={classes.HexagonDetailBox}>
            <Box className={classes.hexagonBox}>
              <ReverseMultipleHexagonWithImage image={Image} />
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
                  variant="subtitle1"
                  component="h2"
                  className={descriptionTitleBox}
                >
                  Start working together.
                </Typography>
              </Box>
              <Box display="flex" pb={2}>
                <Typography
                  variant="subtitle1"
                  component="h2"
                  className={classes.description}
                >
                  Your engineering team has developed chunks of code for data
                  analysis. These need to be wrapped up so that your customers
                  and other teams/project stakeholders can see, understand and
                  use them easily.
                </Typography>
              </Box>
              <Box display="flex">
                <Typography
                  variant="subtitle1"
                  component="h2"
                  className={descriptionTitleBox}
                >
                  How to begin
                </Typography>
              </Box>
              <Box display="flex" pb={2}>
                <Typography
                  variant="subtitle1"
                  component="h2"
                  className={classes.description}
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
                  variant="subtitle1"
                  component="h2"
                  className={classes.description}
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

export default DataServicesHexagonSection
