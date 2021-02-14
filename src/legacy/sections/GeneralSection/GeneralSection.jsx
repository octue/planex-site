import React from 'react'
import classNames from 'classnames'
import { makeStyles } from '@material-ui/core/styles'

import GridContainer from 'components/common/Grid/GridContainer.jsx'
import GridItem from 'components/common/Grid/GridItem.jsx'
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
}))

function GeneralSection(props) {
  const { title, subtitle, content } = props
  const classes = useStyles()
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <SectionTitle title={title} subtitle={subtitle} />
        <GridContainer>
          <GridItem
            xs={12}
            md={10}
            className={classNames(classes.mrAuto, classes.mlAuto)}
          >
            <StreamField
              map={streamFieldMap}
              content={content}
              classes={classes}
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  )
}

export default GeneralSection
