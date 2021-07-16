import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Image from '../../../assets/images/hexagon/Hero2.png'
import SectionHeading from '../SectionHeading'
import SectionDetail from '../SectionDetail'
import MultipleHexagonWithImage from '../../hexagon/MultipleHexagonWithImage'

const useStyles = makeStyles((theme) => ({
  container: {
    height: '100%',
    marginTop: '4rem',
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
    marginTop: '6rem',
  },
  detailBox: {
    marginLeft: '2rem',
    width: '50%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      marginLeft: '0.1rem',
    },
  },
}))
const HexagonSection = () => {
  const classes = useStyles()
  const theme = useTheme()
  return (
    <>
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
            <SectionDetail
              heading="You don't need to be a materials scientist to build a LEGO® model."
              description="So why should someone modelling climate or energy systems need to be an expert coder? Yet scientists waste 95% of their day [Source:McKinsey] being general programmers, API architects and DevOps engineers. Our solution: a framework of open-source tools to create, connect, exchange and reuse analysis building blocks."
              button="click me"
            />
          </Box>
        </Box>
      </Container>
    </>
  )
}

export default HexagonSection
