import React from 'react'
import classNames from 'classnames'
import GridContainer from 'components/common/Grid/GridContainer.jsx'
import GridItem from 'components/common/Grid/GridItem.jsx'
import Icon from '@material-ui/core/Icon'
import Typography from '@material-ui/core/Typography'

import { makeStyles } from '@material-ui/core/styles'
import useWindowDimensions from 'hooks/useWindowDimensions'
import ButtonLink from 'components/navigation/ButtonLink'
import sectionsStyle from 'assets/jss/material-octue/sectionsStyle.jsx'

const useStyles = makeStyles((theme) => ({
  hero: sectionsStyle.sectionImage,
  title: {
    color: theme.palette.text.primary,
    marginTop: '30px',
    marginBottom: '25px',
    minHeight: '32px',
  }, // Todo this class can be simplified using the color and the gutterBottom props of Typography
  subtitle: {
    color: theme.palette.text.secondary,
    maxWidth: '500px',
    margin: '10px auto 0',
    whiteSpace: 'pre-line',
  }, // Todo this class can be simplified using the color and the gutterBottom props of Typography
  container: {
    ...sectionsStyle.container,
    height: '100vh',
  },
  ctaIcon: {
    margin: theme.spacing(1),
  },
  ctaContainer: {
    marginTop: theme.spacing(2),
  },
}))

function getHeroImageDims(windowDims) {
  const width = Math.ceil(windowDims.width / 200) * 200
  const height = Math.ceil(windowDims.height / 200) * 200
  return `${width}x${height}`
}

function HeroSection(props) {
  const { title, subtitle, ctaIcon, ctaText, ctaTo, image } = props
  const classes = useStyles()
  const windowDims = useWindowDimensions()
  const imageUrl = `${
    window.baseUrl
  }/api/images/${image}/serve/?filter=fill-${getHeroImageDims(windowDims)}`
  const bg = { backgroundImage: `url(${imageUrl})` }
  const ctaIconComponent = ctaIcon ? (
    <Icon className={classNames(ctaIcon, classes.ctaIcon)} />
  ) : undefined
  return (
    <div className={classes.hero} style={bg}>
      <GridContainer
        direction="row"
        justify="flex-start"
        alignItems="center"
        className={classes.container}
      >
        <GridItem xs={12} md={6}>
          {title ? (
            <Typography variant="h3" className={classes.title}>
              {title}
            </Typography>
          ) : undefined}
          {subtitle ? (
            <Typography variant="h4" className={classes.subtitle}>
              {subtitle}
            </Typography>
          ) : undefined}
          {ctaTo && (ctaIcon || ctaText) ? (
            <GridContainer
              direction="row"
              justify="flex-end"
              className={classes.ctaContainer}
            >
              <GridItem>
                <ButtonLink to={ctaTo}>
                  {ctaIconComponent}
                  {ctaText}
                </ButtonLink>
              </GridItem>
            </GridContainer>
          ) : undefined}
        </GridItem>
      </GridContainer>
    </div>
  )
}

export default HeroSection
