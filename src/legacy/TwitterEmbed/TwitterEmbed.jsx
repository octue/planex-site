import React from 'react'
import PropTypes from 'prop-types'
import { TwitterTimelineEmbed } from 'react-twitter-embed'

class TwitterEmbed extends React.Component {
  render() {
    const options = {
      height: '17rem',
    }
    return (
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="octue"
        theme={this.props.dark ? 'dark' : 'light'}
        options={options}
        noHeader
        noScrollbar
        noFooter
        transparent={this.props.transparent}
      />
    )
  }
}

TwitterEmbed.defaultProps = {
  dark: false,
  transparent: true,
}

TwitterEmbed.propTypes = {
  dark: PropTypes.bool,
  transparent: PropTypes.bool,
}

export default TwitterEmbed
