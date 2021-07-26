import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Image from '../../../assets/images/hexagon/Hero1.png'
import SectionHeading from '../SectionHeading'
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
    // padding: '1rem 1rem',
    marginLeft: '60px',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      // padding: '0',
      marginLeft: '0',
    },
  },
  hexagonTitle: {
    // width: '50%',
    maxWidth: '456px',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  hexagonBox: {
    marginTop: '132px',
  },
  detailBox: {
    // marginLeft: '2rem',
    // width: '50%',
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
const AboutHexagonSection = () => {
  const classes = useStyles()
  const theme = useTheme()
  return (
    <section className={classes.bgColor}>
      <Container maxWidth="lg" className={classes.container}>
        <Box display="flex" className={classes.parentBox}>
          <Box className={classes.hexagonTitle}>
            <Box>
              <SectionHeading text="Do more with your data" />
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
                  Data was always at the heart of a scientist’s work. Today,
                  computers carry out sophisticated analysis for us at speed –
                  but at a price. Most scientists have to code in order to draw
                  conclusions. They’ve become data scientists by default.
                </Typography>
              </Box>
              <Box display="flex" pb={3}>
                <Typography
                  variant="subtitle1"
                  component="h2"
                  className={classes.description}
                >
                  When Tom established marine energy consultancy Ocean Array
                  Systems in 2013 he became frustrated by the difficulties of
                  reusing data and building tool chains that span organisations,
                  He started developing the Octue platform and open-source
                  Twined framework to make it easier.
                </Typography>
              </Box>
              <Box display="flex" pb={3}>
                <Typography
                  variant="subtitle1"
                  component="h2"
                  className={classes.description}
                >
                  Octue the company was launched in 2017 and recognised as a
                  Gamechanger by the UK Offshore Renewable Energy Catapult for
                  its work on digital twins.
                </Typography>
              </Box>
              <Box display="flex" pb={4}>
                <Typography
                  variant="subtitle1"
                  component="h2"
                  className={classes.description}
                >
                  In 2021, Octue became a non-profit dedicated to developing
                  ever-better tools and data sources for all scientists. Our
                  passion is the planet - the pressing need to tackle the
                  climate crisis, and to urgently replace fossil fuels in
                  particular, drives our commitment. Today, we help people
                  across the renewable energy sector - and beyond - get more
                  from their data, faster.
                </Typography>
              </Box>

              <Box display="flex" className={classes.btnBox}>
                <Button className={classes.cta} variant="outlined">
                  CTA default
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </section>
  )
}

export default AboutHexagonSection
