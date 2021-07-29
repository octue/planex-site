import React from 'react'
import { makeStyles } from '@material-ui/core'
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
    backgroundColor: theme.palette.background.default,
  },
  container: {
    height: '100%',
    paddingTop: '240px',
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
  partnerTitle: {
    maxWidth: '429px',
    paddingTop: '30px',
    marginRight: '190px',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  logoBox: {
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
  mobileNone: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
}))

const PartnerSection = () => {
  const classes = useStyles()

  return (
    <section className={classes.bgColor}>
      <Container maxWidth="lg" className={classes.container}>
        <Box display="flex" className={classes.parentBox}>
          <Box className={classes.partnerTitle}>
            <SectionHeading text="We work with some of the best" />
          </Box>
          <Box className={classes.detailBox}>
            <Box className={classes.logoBox}>
              <PartnerLogo partnersvg={AerosenseWhite} />
              <PartnerLogo partnersvg={CarbonTrustWhite} />
              <PartnerLogo partnersvg={OstWhite} />
              <PartnerLogo
                partnersvg={OstWhite}
                customStyle={classes.mobileNone}
              />
              <PartnerLogo
                partnersvg={CarbonTrustWhite}
                customStyle={classes.mobileNone}
              />
            </Box>
            <Box className={classes.logoBox}>
              <PartnerLogo partnersvg={AerosenseWhite} />
              <PartnerLogo partnersvg={InnovateUkWhite} />
              <PartnerLogo partnersvg={CarbonTrustWhite} />
              <PartnerLogo
                partnersvg={OstWhite}
                customStyle={classes.mobileNone}
              />
              <PartnerLogo
                partnersvg={CarbonTrustWhite}
                customStyle={classes.mobileNone}
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </section>
  )
}

export default PartnerSection
