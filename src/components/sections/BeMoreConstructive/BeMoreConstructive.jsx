import React from 'react'
import { makeStyles } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Image1 from '../../../assets/images/hexagon/Hero.png'
import Image2 from '../../../assets/images/hexagon/Hero1.png'
import Image3 from '../../../assets/images/hexagon/Hero2.png'
import Image4 from '../../../assets/images/hexagon/Hero3.png'
import { SectionHeading, SectionContainer } from '../../elements'
import HexagonGrid from '../../hexagon/HexagonGrid/HexagonGrid'

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

const BeMoreConstructive = (rest) => {
  const classes = useStyles()

  const gridObjectXY = [
    {
      x: 1,
      y: 1,
      gatsbyImageData: Image1,
    },
    {
      x: 2,
      y: 1,
      gatsbyImageData: Image2,
    },
    {
      x: 2,
      y: 2,
      gatsbyImageData: Image3,
    },
    {
      x: 3,
      y: 2,
      gatsbyImageData: Image4,
    },
  ]

  return (
    <SectionContainer {...rest}>
      <Box display="flex" className={classes.parentBox}>
        <Box className={classes.hexagonTitle}>
          <Box>
            <SectionHeading>Be 20x more constructive</SectionHeading>
          </Box>
          <Box className={classes.hexagonBox}>
            <HexagonGrid grid={gridObjectXY} />
          </Box>
        </Box>
        <Box className={classes.detailBox}>
          <Box>
            <Box display="flex" className={classes.titleBox}>
              <Typography variant="subtitle1" color="textPrimary">
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
                [Source:McKinsey] being general programmers, API architects and
                DevOps engineers.
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
    </SectionContainer>
  )
}

export default BeMoreConstructive
