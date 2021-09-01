import React from 'react'
import { makeStyles } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import Team from '../../../assets/images/hexagon/team.svg'
import Engineers from '../../../assets/images/hexagon/engineers.svg'
import Consultants from '../../../assets/images/hexagon/consultants.svg'
import Researchers from '../../../assets/images/hexagon/researchers.svg'
import { SectionHeading, SectionContainer, SectionDetail } from '../../elements'
import HexagonSvg from '../../hexagon/HexagonSvg/HexagonSvg'

const useStyles = makeStyles((theme) => ({
  parentBox: {
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

const SolutionsAcrossScience = (rest) => {
  const classes = useStyles()

  return (
    <SectionContainer {...rest}>
      <Box display="flex" className={classes.parentBox}>
        <Box className={classes.titleBox}>
          <SectionHeading>Solutions across science</SectionHeading>
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
              <HexagonSvg svg={Consultants} />
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
    </SectionContainer>
  )
}

export default SolutionsAcrossScience
