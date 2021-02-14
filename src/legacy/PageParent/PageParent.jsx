import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import Footer from 'components/site/Footers/Footer.jsx'

import pageParentStyle from 'assets/jss/material-octue/components/pageParentStyle.jsx'

// Every refresh of the page randomly selects from these
const backgrounds = [
  require('assets/img/backgrounds/shutterstock-44703712-reduced.jpg'),
  require('assets/img/backgrounds/shutterstock-249898588-reduced.jpg'),
  require('assets/img/backgrounds/shutterstock-251095081-reduced.jpg'),
  require('assets/img/backgrounds/shutterstock-252754729-reduced.jpg'),
]

class PageParent extends React.Component {
  wrapper = React.createRef()

  // eslint-disable-next-line react/state-in-constructor
  state = {
    background: backgrounds[Math.floor(Math.random() * backgrounds.length)],
  }

  componentDidMount() {
    document.body.style.overflow = 'unset'
  }

  render() {
    const { classes } = this.props
    return (
      <div>
        <div className={classes.wrapper} ref={this.wrapper}>
          <div
            className={classes.fullPage}
            style={{ backgroundImage: `url(${this.state.background})` }}
          >
            <div className={classes.container}>{this.props.children}</div>
            <Footer white />
          </div>
        </div>
      </div>
    )
  }
}

PageParent.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(pageParentStyle)(PageParent)
