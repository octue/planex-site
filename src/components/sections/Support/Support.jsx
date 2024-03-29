import React from 'react'
import { makeStyles } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Image from '../../../assets/images/hexagon/Hero7.png'
import { SectionHeading, SectionContainer } from '../../elements'
import HexagonGrid from '../../hexagon/HexagonGrid/HexagonGrid'

const useStyles = makeStyles((theme) => ({
  parentBox: {
    maxheight: '434px',
    flexDirection: 'column',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
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

const Support = (rest) => {
  const classes = useStyles()
  const gridObjectXY = [
    {
      x: 1,
      y: 1,
      gatsbyImageData: Image,
    },
    {
      x: 2,
      y: 1,
      gatsbyImageData: Image,
    },
    {
      x: 2,
      y: 2,
      gatsbyImageData: Image,
    },
    {
      x: 3,
      y: 2,
      gatsbyImageData: Image,
    },
  ]

  return (
    <SectionContainer {...rest}>
      <Box display="flex" className={classes.parentBox}>
        <Box className={classes.hexagonTitle}>
          <Box>
            <SectionHeading>Support</SectionHeading>
          </Box>
        </Box>
        <Box className={classes.HexagonDetailBox}>
          <Box className={classes.hexagonBox}>
            <HexagonGrid grid={gridObjectXY} />
          </Box>
          <Box className={classes.detailBox}>
            <Box display="flex" className={classes.titleBox}>
              <Typography variant="subtitle1" color="textPrimary">
                Enjoy ongoing maintenance and help from a team who specialise in
                turning scientific code into industrial data products.
              </Typography>
            </Box>
            <Box display="flex">
              <Typography
                variant="body1"
                color="textSecondary"
                component="span"
                className={classes.descriptionTitle}
              >
                Flexi-expertise on tap
              </Typography>
            </Box>
            <Box display="flex" pb={2}>
              <Typography
                variant="body1"
                color="textSecondary"
                component="span"
              >
                You’ve built some data services, but they need to evolve to meet
                changing needs. Your data analysts need some extra help tweaking
                and getting things right, and you don’t want to hire a full
                software engineering team in house.
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
                If we’ve not worked together before, the best place to start is
                with a code review, to develop a roadmap to where you need to be
                and what kind of monthly support effort might be helpful.
              </Typography>
            </Box>

            <Box display="flex" className={classes.btnBox}>
              <Button className={classes.cta} variant="outlined">
                Add an expert
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </SectionContainer>
  )
}

export default Support
