import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Image1 from '../../../assets/images/hexagon/growth.svg'
import Image2 from '../../../assets/images/hexagon/team.svg'
import Image3 from '../../../assets/images/hexagon/icon.svg'
import SectionHeading from '../SectionHeading'
import SectionDetail from '../SectionDetail'
import HexagonSvg from '../../hexagon/HexagonSvg'

const useStyles = makeStyles((theme) => ({
  container: {
    height: '100%',
    marginTop: '4rem',
  },
  parentBox: {
    padding: '1rem 1rem',
    flexDirection: 'column',
  },
  hexagonBox: {
    justifyContent: 'center',
    // alignItems: 'center',
  },
  titleBox: {
    marginBottom: '4rem',
  },
  hexagonMB: {
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
}))
const SvgHexagonSection = () => {
  const classes = useStyles()
  const theme = useTheme()
  return (
    <>
      <Container maxWidth="lg" className={classes.container}>
        <Box display="flex" className={classes.parentBox}>
          <Box className={classes.titleBox}>
            <SectionHeading text="What will you build?" />
          </Box>
          <Box>
            <Box display="flex" className={classes.hexagonMB}>
              <Box display="flex" className={classes.hexagonBox}>
                <HexagonSvg svg={Image1} />
                <SectionDetail
                  heading="Build breakthroughs."
                  description="Cut the time and energy spent doing data, increase the time for discovery."
                />
              </Box>
              <Box display="flex" className={classes.hexagonBox}>
                <HexagonSvg svg={Image2} />
                <SectionDetail
                  heading="Build breakthroughs."
                  description="Cut the time and energy spent doing data, increase the time for discovery."
                />
              </Box>
            </Box>
            <Box display="flex" className={classes.hexagonMB}>
              <Box display="flex" className={classes.hexagonBox}>
                <HexagonSvg svg={Image2} />
                <SectionDetail
                  heading="Build breakthroughs."
                  description="Cut the time and energy spent doing data, increase the time for discovery."
                />
              </Box>
              <Box display="flex" className={classes.hexagonBox}>
                <HexagonSvg svg={Image3} />
                <SectionDetail
                  heading="Build breakthroughs."
                  description="Cut the time and energy spent doing data, increase the time for discovery."
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  )
}

export default SvgHexagonSection
