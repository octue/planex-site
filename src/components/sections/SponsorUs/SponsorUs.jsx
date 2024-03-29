import React from 'react'
import { makeStyles } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'

import { SectionHeading, SectionContainer } from '../../elements'
import Image1 from '../../../assets/images/hexagon/Hero8.png'
import Image2 from '../../../assets/images/hexagon/Hero10.png'
import Image3 from '../../../assets/images/hexagon/Hero9.png'
import HexagonGrid from '../../hexagon/HexagonGrid/HexagonGrid'

const useStyles = makeStyles((theme) => ({
  parentBox: {
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  hexagonTitle: {
    width: '50%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  hexagonBox: {
    marginTop: '8px',
    marginLeft: '100px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '10px',
    },
  },
  detailBox: {
    maxWidth: '590px',
    marginLeft: '190px',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      marginLeft: '0.1rem',
    },
  },
  titleBox: {
    marginBottom: '32px',
  },
  cta: {
    display: 'flex',
    paddingTop: `8px`,
    paddingBottom: `8px`,
    backgroundColor: `#D31020`,
  },
  btnBox: {
    marginTop: '30px',
  },
}))

const SponsorUs = (rest) => {
  const classes = useStyles()
  const gridObjectXY = [
    {
      x: 3,
      y: 1,
      gatsbyImageData: Image1,
    },
    {
      x: 1,
      y: 2,
      gatsbyImageData: Image2,
    },
    {
      x: 2,
      y: 2,
      gatsbyImageData: Image3,
    },
  ]
  return (
    <SectionContainer {...rest}>
      <Box display="flex" className={classes.parentBox}>
        <Box className={classes.hexagonTitle}>
          <SectionHeading>Sponsor us</SectionHeading>
        </Box>
        <Box className={classes.detailBox}>
          <Box>
            <Box display="flex" className={classes.titleBox}>
              <Typography variant="subtitle1" color="textPrimary">
                Octue is a non-profit organization. Our plan is to become self
                sufficient, to fund ever-better tools and data sources for
                scientists, particularly those working to tackle the climate
                crisis. We can succeed faster with your contribution:
              </Typography>
            </Box>
            <Box display="flex" pb={1}>
              <Typography
                variant="body1"
                color="textSecondary"
                component="span"
              >
                Regular donations will help us move the needle on climate
                change.
              </Typography>
            </Box>
            <Box display="flex" pb={1}>
              <Typography
                variant="body1"
                color="textSecondary"
                component="span"
              >
                Sponsor us to tackle an issue or implement specific new
                features.
              </Typography>
            </Box>
            <Box display="flex" pb={1}>
              <Typography
                variant="body1"
                color="textSecondary"
                component="span"
              >
                Partner with us to help build the twine framework to meet your
                needs.
              </Typography>
            </Box>
            <Box display="flex" className={classes.btnBox}>
              <Button className={classes.cta} variant="outlined">
                Donate
              </Button>
            </Box>
          </Box>
          <Box className={classes.hexagonBox}>
            <HexagonGrid grid={gridObjectXY} />
          </Box>
        </Box>
      </Box>
    </SectionContainer>
  )
}

export default SponsorUs
