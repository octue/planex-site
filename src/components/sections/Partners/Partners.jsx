import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import PartnerLogo from '../../elements/PartnerLogo'
import SectionHeading from '../../elements/SectionHeading'
import SectionContainer from '../../elements/SectionContainer'

const useStyles = makeStyles((theme) => ({
  logosBox: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  logo: {
    display: 'flex',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(2),
    },
  },
}))

const PartnerSection = ({ id, heading, partnerLogos }) => {
  const classes = useStyles()

  return (
    <SectionContainer id={id}>
      <Grid container spacing={0}>
        <Grid item sm={6} xs={12}>
          <SectionHeading>{heading}</SectionHeading>
        </Grid>
        <Grid item sm={6} xs={12} className={classes.logosBox}>
          {partnerLogos.map((logo) => (
            <PartnerLogo className={classes.logo} {...logo} />
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
