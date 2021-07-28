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
import SimpleSmallHexagon from '../../hexagon/SimpleSmallHexagon'
import SmallHexagonSvg from '../../hexagon/SmallHexagonSvg'
const useStyles = makeStyles((theme) => ({
  bgColor: {
    backgroundColor: theme.palette.background.paper,
  },
  container: {
    height: '100%',
    paddingTop: '238px',
    paddingBottom: '4rem',
    [theme.breakpoints.down('xs')]: {
      paddingTop: '100px',
    },
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
    maxWidth: '377px',

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
    width: '590px',
    marginLeft: '233px',
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

const JoinSection = ({ description }) => {
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
            <SectionDetail description={description} button="Get involved" />
            <Box className={classes.hexagonBox}>
              <SimpleSmallHexagon bgHexImg={Image} />
              <SimpleSmallHexagon bgHexImg={Image} />
              <SimpleSmallHexagon
                bgHexImg={Image}
                customStyle={classes.mbnone}
              />
              <SimpleSmallHexagon
                bgHexImg={Image}
                customStyle={classes.mbnone}
              />
              <SimpleSmallHexagon bgHexImg={Image} />
              <SmallHexagonSvg svg={Image1} />
            </Box>
          </Box>
        </Box>
      </Container>
    </section>
  )
}

export default JoinSection
