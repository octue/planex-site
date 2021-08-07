import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Image from '../../../assets/images/hexagon/Hero2.png'
import SectionHeading from '../../elements/SectionTitle/SectionHeading'
import SectionDetail from '../../elements/SectionDetail/SectionDetail'
import Image1 from '../../../assets/images/hexagon/growth.svg'
import SimpleSmallHexagon from '../../hexagon/SimpleSmallHexagon'
import SmallHexagonSvg from '../../hexagon/SmallHexagonSvg'

const useStyles = makeStyles((theme) => ({
  bgColor: {
    backgroundColor: theme.palette.background.default,
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
    marginLeft: '60px',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
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
  mobileNone: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
}))

const JoinSection = ({ description }) => {
  const classes = useStyles()
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
                className={classes.mobileNone}
              />
              <SimpleSmallHexagon
                bgHexImg={Image}
                className={classes.mobileNone}
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

JoinSection.defaultProps = {}

JoinSection.propTypes = {
  description: PropTypes.string,
}

export default JoinSection
