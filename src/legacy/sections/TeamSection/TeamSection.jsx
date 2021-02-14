import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import SectionTitle from 'components/site/Sections/SectionTitle.jsx'
import streamFieldMap from 'containers/site/Fields'
import StreamField from 'hocs/streamfield'

import sectionsStyle from 'assets/jss/material-octue/sectionsStyle.jsx'
import fieldsStyle from 'assets/jss/material-octue/fieldsStyle'

// eslint-disable-next-line no-unused-vars
const useStyles = makeStyles((theme) => ({
  ...fieldsStyle,
  mrAuto: sectionsStyle.mrAuto,
  mlAuto: sectionsStyle.mlAuto,
  textCenter: sectionsStyle.textCenter,
  container: sectionsStyle.container,
  team: {
    padding: '40px 0',
    '& h5$description': {
      marginBottom: '40px',
    },
  },
  justifyContent: {
    WebkitBoxPack: 'center !important',
    MsFlexPack: 'center !important',
    justifyContent: 'center !important',
  },
}))

function TeamSection(props) {
  const { title, subtitle, content } = props
  const classes = useStyles()
  return (
    <div className={classes.team}>
      <div className={classes.container}>
        <SectionTitle title={title} subtitle={subtitle} />
        <StreamField map={streamFieldMap} content={content} classes={classes} />
      </div>
    </div>
  )
}

export default TeamSection
