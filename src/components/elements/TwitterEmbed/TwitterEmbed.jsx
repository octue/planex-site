import React from 'react'
import PropTypes from 'prop-types'
import { useTheme } from '@material-ui/core'
import { TwitterTimelineEmbed } from 'react-twitter-embed'

const TwitterEmbed = ({ height, transparent }) => {
  const theme = useTheme()
  const options = {
    height: height,
  }
  return (
    <TwitterTimelineEmbed
      sourceType="profile"
      screenName="octue"
      theme={theme.palette.type}
      options={options}
      noHeader
      noScrollbar
      noFooter
      transparent={transparent}
    />
  )
}

TwitterEmbed.defaultProps = {
  height: '400px',
  transparent: true,
}

TwitterEmbed.propTypes = {
  /**
   * Height of the embed as a css unit eg "17rem" or "400px"
   */
  height: PropTypes.string,
  /**
   * Makes the background of the twitter feed transparent (useful for rendering over background images)
   */
  transparent: PropTypes.bool,
}

export default TwitterEmbed
