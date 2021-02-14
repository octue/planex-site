import React from 'react'
import PropTypes from 'prop-types'

/* Wraps the section in a div that can be linked to by hash routing.
 * If no hash is provided in the stream item (or it is an empty string),
 * do not wrap the children, instead put them in a fragment to avoid unnecessary div.
 */
class SectionHash extends React.Component {
  render() {
    return this.props.hash ? (
      <div id={this.props.hash} className="cd-section">
        {this.props.children}
      </div>
    ) : (
      <>{this.props.children}</>
    )
  }
}

SectionHash.defaultProps = {
  hash: undefined,
}

SectionHash.propTypes = {
  hash: PropTypes.string,
}

export default SectionHash
