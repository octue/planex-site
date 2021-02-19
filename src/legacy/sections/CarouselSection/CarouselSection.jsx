import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'

import GridContainer from 'components/common/Grid/GridContainer.jsx'
import GridItem from 'components/common/Grid/GridItem.jsx'

import carouselSectionStyle from 'assets/jss/material-octue/sections/carouselSectionStyle.jsx'
import classNames from 'classnames'

class CarouselSection extends React.Component {
  render() {
    const { classes, value } = this.props
    console.log('RENDERING CAROUSEL SECTION', this.props)
    return (
      <div className={classes.carousel}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={6}
              md={6}
              className={classNames(
                classes.mrAuto,
                classes.mlAuto,
                classes.textCenter
              )}
            >
              {value.heading ? (
                <h2 className={classes.sectionHeading}>{value.heading}</h2>
              ) : undefined}
              {value.description ? (
                <h4 className={classes.sectionDescription}>
                  {value.description}
                </h4>
              ) : undefined}
              {/* TODO add the image carousel */}
            </GridItem>
          </GridContainer>
        </div>
      </div>
    )
  }
}

export default withStyles(carouselSectionStyle)(CarouselSection)
