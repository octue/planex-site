import React from 'react'
import classNames from 'classnames'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import GridContainer from 'components/common/Grid/GridContainer.jsx'
import GridItem from 'components/common/Grid/GridItem.jsx'

import sectionsStyle from 'assets/jss/material-octue/sectionsStyle.jsx'

const useStyles = makeStyles((theme) => ({
  mrAuto: sectionsStyle.mrAuto,
  mlAuto: sectionsStyle.mlAuto,
  textCenter: sectionsStyle.textCenter,
  title: {
    color: theme.palette.text.primary,
    marginTop: '30px',
    marginBottom: '25px',
    minHeight: '32px',
  },
  subtitle: {
    color: theme.palette.text.secondary,
    maxWidth: '500px',
    margin: '10px auto',
    whiteSpace: 'pre-line',
  },
}))

function SectionTitle(props) {
  const { title, subtitle } = props
  const classes = useStyles()
  return (
    <GridContainer>
      <GridItem
        xs={12}
        sm={10}
        md={8}
        className={classNames(
          classes.mrAuto,
          classes.mlAuto,
          classes.textCenter
        )}
      >
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
      </GridItem>
    </GridContainer>
  )
}

export default SectionTitle
