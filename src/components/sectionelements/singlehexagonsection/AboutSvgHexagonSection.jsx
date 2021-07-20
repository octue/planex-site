import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Consultans from '../../../assets/images/hexagon/consultans.svg'
import Team from '../../../assets/images/hexagon/team.svg'
import Engineers from '../../../assets/images/hexagon/engineers.svg'
import Researchers from '../../../assets/images/hexagon/researchers.svg'
import SectionHeading from '../SectionHeading'
import SectionDetail from '../SectionDetail'
import HexagonSvg from '../../hexagon/HexagonSvg'

const useStyles = makeStyles((theme) => ({
  bgColor: {
    backgroundColor: theme.palette.background.paper,
  },
  container: {
    height: '100%',
    paddingTop: '180px',
    [theme.breakpoints.down('xs')]: {
      paddingTop: '100px',
    },
  },
  parentBox: {
    // padding: '1rem 1rem',
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
    width: '342px',
    marginTop: '26px',
  },
  titleBox: {
    marginBottom: '16px',
  },
  hexagonMB: {
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
const AboutSvgHexagonSection = () => {
  const classes = useStyles()
  const theme = useTheme()
  return (
    <section className={classes.bgColor}>
      <Container maxWidth="lg" className={classes.container}>
        <Box display="flex" className={classes.parentBox}>
          <Box className={classes.titleBox}>
            <SectionHeading text="Solutions across science" />
          </Box>
          <Box>
            <Box display="flex" className={classes.hexagonMB}>
              <Box display="flex" className={classes.hexagonBox}>
                <HexagonSvg svg={Team} />
                <Box className={classes.hexagonBoxDescription}>
                  <SectionDetail
                    heading="Asset owners."
                    description="Optimise the operation of your plant."
                  />
                </Box>
              </Box>
              <Box
                display="flex"
                className={`${classes.hexagonBox} ${classes.hexagonSecondSec}`}
              >
                <HexagonSvg svg={Consultans} />
                <Box className={classes.hexagonBoxDescription}>
                  <SectionDetail
                    heading="Consultants."
                    description="Boost the performance of your engineering assets."
                  />
                </Box>
              </Box>
            </Box>
            <Box display="flex" className={classes.hexagonMB}>
              <Box display="flex" className={classes.hexagonBox}>
                <HexagonSvg svg={Engineers} />
                <Box className={classes.hexagonBoxDescription}>
                  <SectionDetail
                    heading="Engineers"
                    description="Build digital twins of assets and processes."
                  />
                </Box>
              </Box>
              <Box
                display="flex"
                className={`${classes.hexagonBox} ${classes.hexagonSecondSec}`}
              >
                <HexagonSvg svg={Researchers} />
                <Box className={classes.hexagonBoxDescription}>
                  <SectionDetail
                    heading="Researchers."
                    description="Get your data in shape to get going on your analysis."
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

export default AboutSvgHexagonSection
