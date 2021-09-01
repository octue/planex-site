import React from 'react'
import { makeStyles } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import Growth from '../../../assets/images/hexagon/growth.svg'
import Team from '../../../assets/images/hexagon/team.svg'
import Icon from '../../../assets/images/hexagon/icon.svg'
import Build from '../../../assets/images/hexagon/build.svg'
import { SectionHeading, SectionContainer, SectionDetail } from '../../elements'
import HexagonSvg from '../../hexagon/HexagonSvg/HexagonSvg'

const useStyles = makeStyles((theme) => ({
  parentBox: {
    flexDirection: 'column',
    [theme.breakpoints.down('sm')]: {},
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
const WhatWillYouBuild = (rest) => {
  const classes = useStyles()
  return (
    <SectionContainer {...rest}>
      <Box display="flex" className={classes.parentBox}>
        <Box className={classes.titleBox}>
          <SectionHeading>What will you build?</SectionHeading>
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
    </SectionContainer>
  )
}

export default WhatWillYouBuild
