import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import SectionHeading from '../SectionHeading'
import PartnerLogo from '../PartnerLogo'
import AerosenseWhite from '../../../assets/images/logos/partners/aerosense-white.svg'
import CarbonTrustWhite from '../../../assets/images/logos/partners/carbon-trust-white.svg'
import InnovateUkWhite from '../../../assets/images/logos/partners/innovate-uk-white.svg'
import OstWhite from '../../../assets/images/logos/partners/ost-white.svg'
const useStyles = makeStyles((theme) => ({
  bgColor: {
    backgroundColor: theme.palette.background.paper,
  },
  container: {
    height: '100%',
    paddingTop: '4rem',
  },
  parentBox: {
    padding: '1rem 1rem',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      padding: '0',
    },
  },
  partnerTitle: {
    width: '30%',
    paddingTop: '30px',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  logoBox: {
    // marginTop: '2rem',
    display: 'flex',
    justifyContent: 'space-evenly',
  },
  detailBox: {
    width: '70%',
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

const PartnerSection = () => {
  const classes = useStyles()
  const theme = useTheme()
  return (
    <section className={classes.bgColor}>
      <Container maxWidth="lg" className={classes.container}>
        <Box display="flex" className={classes.parentBox}>
          <Box className={classes.partnerTitle}>
            <Box>
              <SectionHeading text="We work with some of the best" />
            </Box>
          </Box>
          <Box className={classes.detailBox}>
            <Box className={classes.logoBox}>
              <PartnerLogo partnersvg={AerosenseWhite} />
              <PartnerLogo partnersvg={CarbonTrustWhite} />
              <PartnerLogo partnersvg={OstWhite} />
              <PartnerLogo partnersvg={OstWhite} customStyle={classes.mbnone} />
              <PartnerLogo
                partnersvg={CarbonTrustWhite}
                customStyle={classes.mbnone}
              />
            </Box>
            <Box className={classes.logoBox}>
              <PartnerLogo partnersvg={AerosenseWhite} />
              <PartnerLogo partnersvg={InnovateUkWhite} />
              <PartnerLogo partnersvg={CarbonTrustWhite} />
              <PartnerLogo partnersvg={OstWhite} customStyle={classes.mbnone} />
              <PartnerLogo
                partnersvg={CarbonTrustWhite}
                customStyle={classes.mbnone}
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </section>
  )
}

export default PartnerSection
