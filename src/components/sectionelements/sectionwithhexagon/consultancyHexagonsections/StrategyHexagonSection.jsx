import React from 'react'
import { makeStyles } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import classNames from 'classnames'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Image from '../../../../assets/images/hexagon/Hero5.png'
import SectionHeading from '../../SectionHeading'
import ReverseMultipleHexagonImage from '../../../../components/hexagon/ReverseMultipleHexagonWithImage'

const useStyles = makeStyles((theme) => ({
  bgColor: {
    backgroundColor: theme.palette.background.default,
  },
  container: {
    height: '100%',
    paddingTop: '235px',
    [theme.breakpoints.down('sm')]: {
      paddingTop: '188px',
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
    // marginTop: '24px',
  },
  titleBox: {
    marginBottom: '32px',
  },
}))
const StrategyHexagonSection = () => {
  const classes = useStyles()
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
              <SectionHeading text="Strategy" />
            </Box>
          </Box>
          <Box className={classes.HexagonDetailBox}>
            <Box className={classes.hexagonBox}>
              <ReverseMultipleHexagonImage image={Image} />
            </Box>
            <Box className={classes.detailBox}>
              <Box display="flex" className={classes.titleBox}>
                <Typography variant="subtitle1" color="textPrimary">
                  It’s time to master and maximise data. If you’re managing lots
                  of scientific data and analyses, change your business model to
                  offer these as services - or improve your processes to make
                  them consistent, reduce risk and cost.
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
              <Box display="flex" pb={4}>
                <Typography
                  variant="subtitle2"
                  component="h2"
                  className={classes.description}
                >
                  A small package of work to understand your commercial needs
                  and outline a system to tackle them.
                </Typography>
              </Box>

              <Box display="flex" className={classes.btnBox}>
                <Button className={classes.cta} variant="outlined">
                  Let's connect
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </section>
  )
}

export default StrategyHexagonSection
