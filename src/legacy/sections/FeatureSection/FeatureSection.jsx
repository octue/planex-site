// eslint-disable-next-line max-classes-per-file
import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import classNames from 'classnames'

import GridContainer from 'components/common/Grid/GridContainer.jsx'
import Card from 'components/site/Card/Card.jsx'
import GridItem from 'components/common/Grid/GridItem.jsx'
import InfoArea from 'components/site/InfoArea/InfoArea.jsx'
import featureSectionStyle from 'assets/jss/material-octue/sections/featureSectionStyle.jsx'

class FeatureInfoArea extends React.Component {
  render() {
    console.log('RENDERING FEATURESECTION', this.props)
    return (
      <InfoArea
        title={this.props.heading}
        description={
          <>
            <p>{this.props.description}</p>
            {this.props.more_info_url ? (
              <a
                href={this.props.more_info_url}
                onClick={(e) => e.preventDefault()}
              >
                Find out more...
              </a>
            ) : undefined}
          </>
        }
        icon={this.props.icon}
        iconColor="info"
        vertical
      />
    )
  }
}

class FeatureSection extends React.Component {
  render() {
    const { classes, value } = this.props
    console.log('RENDERING FEATURESECTION', this.props)
    return (
      <div className={classes.feature}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              xs={12}
              md={6}
              sm={6}
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
            </GridItem>
          </GridContainer>
          {value.image ? (
            <GridContainer>
              <GridItem xs={12} sm={5} md={5} className={classes.mlAuto}>
                {value.features.map((item, idx) => {
                  return (
                    // eslint-disable-next-line react/no-array-index-key
                    <FeatureInfoArea key={idx} {...item} />
                  )
                })}
              </GridItem>
              <GridItem xs={12} sm={5} md={5} className={classes.mrAuto}>
                <Card
                  background
                  className={classes.card4}
                  style={{ backgroundImage: `url(${value.image.url})` }}
                />
              </GridItem>
            </GridContainer>
          ) : (
            <GridContainer>
              {value.features.map((item) => {
                return (
                  <GridItem xs={12} sm={4} md={4}>
                    <FeatureInfoArea {...item} />
                  </GridItem>
                )
              })}
            </GridContainer>
          )}
        </div>
      </div>
    )
  }
}

export default withStyles(featureSectionStyle)(FeatureSection)
