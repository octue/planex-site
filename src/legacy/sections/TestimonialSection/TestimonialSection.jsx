// eslint-disable-next-line max-classes-per-file
import React from 'react'
import Carousel from 'react-slick'
import withStyles from '@material-ui/core/styles/withStyles'
import Star from '@material-ui/icons/Star'
import classNames from 'classnames'

import GridContainer from 'components/common/Grid/GridContainer.jsx'
import GridItem from 'components/common/Grid/GridItem.jsx'
import Card from 'components/site/Card/Card.jsx'
import CardBody from 'components/site/Card/CardBody.jsx'
import CardAvatar from 'components/site/Card/CardAvatar.jsx'
import Muted from 'components/site/Typography/Muted.jsx'
import Warning from 'components/site/Typography/Warning.jsx'

import testimonialSectionStyle from 'assets/jss/material-octue/sections/testimonialSectionStyle.jsx'

class Testimonial extends React.Component {
  render() {
    const { classes } = this.props
    let i
    const starComponents = []
    if (this.props.stars) {
      for (i = 0; i < this.props.stars; i += 1) {
        starComponents.push(
          <Warning>
            <Star className={classes.starIcons} />
          </Warning>
        )
      }
    }
    return (
      <div>
        <Card testimonial plain className={classes.card2}>
          {this.props.image ? (
            <CardAvatar testimonial plain>
              {/* <a href="#" onClick={e => e.preventDefault()}> */}
              <img src={this.props.image.url} alt="..." />
              {/* </a> */}
            </CardAvatar>
          ) : undefined}
          <CardBody plain>
            <h5 className={classes.cardDescription}>{this.props.quote}</h5>
            <h4 className={classes.cardTitle}>{this.props.name}</h4>
            {this.props.organisation ? (
              <Muted>
                <h6>{`${this.props.role ? `${this.props.role}, ` : ''}${
                  this.props.organisation
                }`}</h6>
              </Muted>
            ) : undefined}
          </CardBody>
          <div>{starComponents}</div>
        </Card>
      </div>
    )
  }
}

class TestimonialSection extends React.Component {
  render() {
    const { classes } = this.props
    console.log('RENDERING TESTIMONIALS SECTION', this.props)
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
    }
    const sectionClasses = classNames({
      [classes.testimonials]: true,
      [classes.sectionDark]: true,
      [classes.testimonial2]: true,
    })
    return (
      <div className={sectionClasses}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <Carousel {...settings}>
                {this.props.value.testimonials.map((item, idx) => {
                  // eslint-disable-next-line react/no-array-index-key
                  return <Testimonial {...item} key={idx} classes={classes} />
                })}
              </Carousel>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    )
  }
}

export default withStyles(testimonialSectionStyle)(TestimonialSection)
