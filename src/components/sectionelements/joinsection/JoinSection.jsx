import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Image from '../../../assets/images/hexagon/Hero2.png'
import SectionHeading from '../SectionHeading'
import SectionDetail from '../SectionDetail'
import TripleHexagon from '../../hexagon/TripleHexagon'
import SimpleHexagon from '../../hexagon/SimpleHexagon'
import HexagonSvg from '../../hexagon/HexagonSvg'
import Image1 from '../../../assets/images/hexagon/growth.svg'
const useStyles = makeStyles((theme) => ({
  bgColor: {
    backgroundColor: theme.palette.background.paper,
  },
  container: {
    height: '100%',
    paddingTop: '4rem',
    paddingBottom: '4rem',
  },
  parentBox: {
    padding: '1rem 1rem',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      padding: '0',
    },
  },
  hexagonTitle: {
    width: '40%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  hexagonBox: {
    marginTop: '2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  detailBox: {
    width: '60%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      marginLeft: '0.1rem',
    },
  },
  mbnone: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
}))

const JoinSection = () => {
  const classes = useStyles()
  const theme = useTheme()
  return (
    <section className={classes.bgColor}>
      <Container maxWidth="lg" className={classes.container}>
        <Box display="flex" className={classes.parentBox}>
          <Box className={classes.hexagonTitle}>
            <Box>
              <SectionHeading text="Join the movement" />
            </Box>
          </Box>
          <Box className={classes.detailBox}>
            <SectionDetail
              description="So why should someone modelling climate or energy systems need to be an expert coder? Yet scientists waste 95% of their day [Source:McKinsey] being general programmers, API architects and DevOps engineers. Our solution: a framework of open-source tools to create, connect, exchange and reuse analysis building blocks."
              button="Get involved"
            />
            <Box className={classes.hexagonBox}>
              <SimpleHexagon bgHexagomImg={Image} />
              <SimpleHexagon bgHexagomImg={Image} />
              <SimpleHexagon
                bgHexagomImg={Image}
                customStyle={classes.mbnone}
              />
              <SimpleHexagon
                bgHexagomImg={Image}
                customStyle={classes.mbnone}
              />
              <SimpleHexagon bgHexagomImg={Image} />
              <HexagonSvg svg={Image1} />
            </Box>
          </Box>
        </Box>
      </Container>
    </section>
  )
}

export default JoinSection
