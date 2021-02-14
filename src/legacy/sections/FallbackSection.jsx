import React from 'react'
import SectionHash from 'components/site/Sections/SectionHash.jsx'

/* A fall back class for a section that provides a div with the appropriate hash reference.
 * This prevents the page scroll navigation from getting busted when one of the sections doesn't work.
 */
class FallbackSection extends React.Component {
  render() {
    if (this.props.value && this.props.value.hash) {
      return <SectionHash hash={this.props.value.hash} />
    }
    return null
  }
}

export default FallbackSection
