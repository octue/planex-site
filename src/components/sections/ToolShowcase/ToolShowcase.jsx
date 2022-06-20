import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './slick-theme.css'

import { SectionContainer, SectionHeading } from '../../elements'

import Box from '@material-ui/core/Box'
import React from 'react'
import Slider from 'react-slick'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core'

const SLIDER_SETTINGS = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
}

const useStyles = makeStyles((theme) => ({
  parentBox: {
    width: '100%',
    flexWrap: 'wrap',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  sectionHeadingBox: {
    width: '100%',
    flexGrow: 1,
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(1),
    },
  },
  column1Box: {
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
  },
  column1ComponentBox: {
    width: '100%',
    '& > :not(:last-child)': {
      marginBottom: theme.spacing(3),
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(4),
    },
  },
  column2ComponentBox: {
    marginTop: theme.spacing(1),
    width: '50%',
    '& > :not(:last-child)': {
      marginBottom: theme.spacing(3),
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
}))

const Slide = ({ heading, ...rest }) => {
  return (
    <Box>
      <Typography variant="h3" component="h2">
        {heading}
      </Typography>
    </Box>
  )
}

const DatasetsSdkSlide = () => {
  return (
    <Box>
      <Typography variant="h3" component="h2">
        Datasets
      </Typography>
    </Box>
  )
}
const ServicesSdkSlide = () => {
  return (
    <Box>
      <Typography variant="h3" component="h2">
        Services
      </Typography>
    </Box>
  )
}

const ToolShowcase = ({ ...rest }) => {
  const classes = useStyles()

  return (
    <SectionContainer {...rest}>
      <Slider {...SLIDER_SETTINGS}>
        <DatasetsSdkSlide />
        <ServicesSdkSlide />
        <ServicesSdkSlide />
      </Slider>
      {/* <Box display="flex" className={classes.parentBox}>
        <Hidden smDown>
          <Box className={classes.column1Box}>
            {headingComponent}
            {column1Component}
          </Box>
          {column2Component}
        </Hidden>
        <Hidden mdUp>
          {headingComponent}
          {column2Component}
          {column1Component}
        </Hidden>
      </Box> */}
    </SectionContainer>

    // <SectionContainer {...rest}>
    //   <Box display="flex" className={classes.parentBox}>
    //     <Box className={classes.hexagonTitle}>
    //       <Box>
    //         <SectionHeading>Validate, create, communicate</SectionHeading>
    //       </Box>
    //     </Box>
    //     <Box className={classes.detailBox}>
    //       <Box>
    //         <Box display="flex" className={classes.titleBox}>
    //           <Typography variant="subtitle1" color="textPrimary">
    //             With this fundamental set of operations in place, it’s much
    //             quicker and easier to access, assess and analyse data, and to
    //             create data services like digital twins.
    //           </Typography>
    //         </Box>
    //         <Box display="flex" pb={4}>
    //           <Typography
    //             variant="body1"
    //             color="textSecondary"
    //             component="span"
    //           >
    //             And whatever you build will be shareable and scalable, so others
    //             can build on your work.
    //           </Typography>
    //         </Box>
    //       </Box>
    //     </Box>
    //   </Box>
    // </SectionContainer>
  )
}

export default ToolShowcase
