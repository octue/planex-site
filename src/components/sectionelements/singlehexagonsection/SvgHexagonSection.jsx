import React from 'react'
import { makeStyles } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Growth from '../../../assets/images/hexagon/growth.svg'
import Team from '../../../assets/images/hexagon/team.svg'
import Icon from '../../../assets/images/hexagon/icon.svg'
import Build from '../../../assets/images/hexagon/build.svg'
import SectionHeading from '../SectionHeading'
import SectionDetail from '../SectionDetail'
import HexagonSvg from '../../hexagon/HexagonSvg'

const useStyles = makeStyles((theme) => ({
  bgColor: {
    backgroundColor: theme.palette.background.default,
  },
  container: {
    height: '100%',
    paddingTop: '180px',
    [theme.breakpoints.down('xs')]: {
      paddingTop: '100px',
    },
  },
  parentBox: {
    marginLeft: '60px',
    flexDirection: 'column',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '0',
    },
  },
  hexagonBox: {
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  hexagonBoxDescription: {
    maxWidth: '342px',
    marginTop: '26px',
  },
  titleBox: {
    marginBottom: '16px',
  },
  hexagonMobileResponsive: {
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  hexagonSecondSec: {
    marginLeft: '108px',
    [theme.breakpoints.down('xs')]: {
      marginLeft: '0',
    },
  },
}))
const SvgHexagonSection = () => {
  const classes = useStyles()
  return (
    <section className={classes.bgColor}>
      <Container maxWidth="lg" className={classes.container}>
        <Box display="flex" className={classes.parentBox}>
          <Box className={classes.titleBox}>
            <SectionHeading text="What will you build?" />
          </Box>
          <Box>
            <Box display="flex" className={classes.hexagonMobileResponsive}>
              <Box display="flex" className={classes.hexagonBox}>
                <HexagonSvg svg={Icon} />
                <Box className={classes.hexagonBoxDescription}>
                  <SectionDetail
                    heading="Build breakthroughs."
                    description="Cut the time and energy spent doing data, increase the time for discovery."
                  />
                </Box>
              </Box>
              <Box
                display="flex"
                className={`${classes.hexagonBox} ${classes.hexagonSecondSec}`}
              >
                <HexagonSvg svg={Build} />
                <Box className={classes.hexagonBoxDescription}>
                  <SectionDetail
                    heading="Build business."
                    description="Maximise data value by turning your code into data services, like digital twins."
                  />
                </Box>
              </Box>
            </Box>
            <Box display="flex" className={classes.hexagonMobileResponsive}>
              <Box display="flex" className={classes.hexagonBox}>
                <HexagonSvg svg={Team} />
                <Box className={classes.hexagonBoxDescription}>
                  <SectionDetail
                    heading="Build collaboration."
                    description="Work together across geographies and disciplines for faster progress."
                  />
                </Box>
              </Box>
              <Box
                display="flex"
                className={`${classes.hexagonBox} ${classes.hexagonSecondSec}`}
              >
                <HexagonSvg svg={Growth} />
                <Box className={classes.hexagonBoxDescription}>
                  <SectionDetail
                    heading="Build growth."
                    description="Accelerate your impact with our digital and renewable energy expertise."
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </section>
  )
}

export default SvgHexagonSection
