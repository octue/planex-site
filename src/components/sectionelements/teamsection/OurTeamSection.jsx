import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Consultans from '../../../assets/images/hexagon/consultans.svg'
import Team from '../../../assets/images/hexagon/team.svg'
import Engineers from '../../../assets/images/hexagon/engineers.svg'
import Researchers from '../../../assets/images/hexagon/researchers.svg'
import TeamImg from '../../../assets/images/team/tom-clark.jpg'
import SectionHeading from '../SectionHeading'
import SectionDetail from '../SectionDetail'
import HexagonSvg from '../../hexagon/HexagonSvg'
import SimpleHexagon from '../../hexagon/SimpleHexagon'
import SectionDetailW3 from '../SectionDetailW3'

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
    // marginTop: '10px',
    marginLeft: '14px',
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
      marginTop: '24px',
    },
  },
  ourTeamBox: {
    marginTop: '26px',
  },
  ourTeamSection: {
    marginTop: '32px',
  },
}))

const OurTeamSection = () => {
  const classes = useStyles()
  const theme = useTheme()
  return (
    <section className={classes.bgColor}>
      <Container maxWidth="lg" className={classes.container}>
        <Box display="flex" className={classes.parentBox}>
          <Box className={classes.titleBox}>
            <SectionHeading text="Our team" />
          </Box>
          <Box className={classes.ourTeamBox}>
            <Box display="flex" className={classes.hexagonMB}>
              <Box display="flex" className={classes.hexagonBox}>
                <SimpleHexagon bgHexagomImg={TeamImg} bgX="50%" bgY="30%" />
                <Box className={classes.hexagonBoxDescription}>
                  <SectionDetailW3
                    headingOne="Tom Clark"
                    headingTwo="Founder, CEO"
                    description="Tom architected Octue’s twined framework and has been awarded patents related to AI and intelligent control of wind farms. He’s worked in renewables since 2006, in a mixture of research and managerial roles, and loves it."
                  />
                </Box>
              </Box>
              <Box
                display="flex"
                className={`${classes.hexagonBox} ${classes.hexagonSecondSec}`}
              >
                <SimpleHexagon bgHexagomImg={TeamImg} bgX="50%" bgY="30%" />
                <Box className={classes.hexagonBoxDescription}>
                  <SectionDetailW3
                    headingOne="Andy Clifton"
                    headingTwo="Co-Founder, Strategic Advisor"
                    description="Andy joins Octue with 20 years of experience delivering complex projects in areas where people, the environment, and energy interact. Andy leads WindForS, the southern German wind energy research cluster where he has developed and implemented a strategy for the joint success of the cluster’s 25 members at 7 locations."
                  />
                </Box>
              </Box>
            </Box>
            <Box
              display="flex"
              className={`${classes.hexagonMB} ${classes.ourTeamSection}`}
            >
              <Box display="flex" className={classes.hexagonBox}>
                <SimpleHexagon bgHexagomImg={TeamImg} bgX="50%" bgY="30%" />
                <Box className={classes.hexagonBoxDescription}>
                  <SectionDetailW3
                    headingOne="Marcus"
                    headingTwo="Role"
                    description="Non fames arcu gravida ut mauris. Eros pulvinar ridiculus maecenas urna. Tempus rutrum tellus id bibendum est feugiat ut. Id nulla fames vulputate sit massa eget nulla amet nunc nibh quam."
                  />
                </Box>
              </Box>
              {/* <Box
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
              </Box> */}
            </Box>
          </Box>
        </Box>
      </Container>
    </section>
  )
}

export default OurTeamSection
