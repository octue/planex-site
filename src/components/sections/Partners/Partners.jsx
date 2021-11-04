import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import PartnerLogo from '../../elements/PartnerLogo'
import { SectionHeading, SectionContainer } from '../../elements'

const useStyles = makeStyles((theme) => ({
  logosBox: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginLeft: `-${theme.spacing(2)}px`,
    marginTop: `-${theme.spacing(4)}px`,
  },
  logo: {
    marginLeft: theme.spacing(2),
    marginTop: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(5),
    },
    display: 'flex',
    alignItems: 'center',
    '&:hover,&:focus': {
      transform: `scale(1.3, 1.3)`,
    },
  },
}))

const PartnerSection = ({ id, heading, partnerLogos }) => {
  const classes = useStyles()
  console.log('partnerlogos', partnerLogos)
  return (
    <SectionContainer id={id}>
      <Grid container spacing={0}>
        <Grid item sm={6} xs={12}>
          <SectionHeading>{heading}</SectionHeading>
        </Grid>
        <Grid item sm={6} xs={12} className={classes.logosBox}>
          {partnerLogos.map((logo) => (
            <Box
              className={classes.logo}
              width={(logo.customData?.scale || 1) * 150}
            >
              <PartnerLogo {...logo} />
            </Box>
          ))}
        </Grid>
      </Grid>
    </SectionContainer>
  )
}

PartnerSection.defaultProps = { partnerLogos: [] }

PartnerSection.propTypes = {
  partnerLogos: PropTypes.array,
  heading: PropTypes.string,
  id: PropTypes.string,
}

export default PartnerSection
