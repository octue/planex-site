/* eslint-disable no-param-reassign,no-plusplus */
import React from 'react'
import PropTypes from 'prop-types'

// Parse the list of sections that can occur in a page and reduce them into a list of objects
export function getSectionHashes(sections) {
  const result = []
  sections.forEach((section) => {
    const { hash } = section
    if (hash) {
      const heading = hash.charAt(0).toUpperCase() + hash.slice(1)
      result.push({
        hash,
        heading,
      })
    }
  })
  return result
}

class Navigator extends React.Component {
  componentDidMount() {
    const href = window.location.href.substring(
      window.location.href.lastIndexOf('#') + 1
    )
    const scrollToElement = document.getElementById(href)
    if (window.location.href.lastIndexOf('#') > 0 && scrollToElement) {
      scrollToElement.scrollIntoView()
    }
    window.addEventListener('scroll', this.updateView)
    this.updateView()
  }

  componentDidUpdate() {
    const href = window.location.href.substring(
      window.location.href.lastIndexOf('#') + 1
    )
    const scrollToElement = document.getElementById(href)
    if (scrollToElement) {
      scrollToElement.scrollIntoView()
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.updateView)
  }

  // eslint-disable-next-line class-methods-use-this
  easeInOutQuad(t, b, c, d) {
    t /= d / 2
    if (t < 1) return (c / 2) * t * t + b
    t--
    return (-c / 2) * (t * (t - 2) - 1) + b
  }

  // eslint-disable-next-line class-methods-use-this
  updateView() {
    const contentSections = document.getElementsByClassName('cd-section')
    const navigationItems = document
      .getElementById('cd-vertical-nav')
      .getElementsByTagName('a')
    if (contentSections.length === navigationItems.length) {
      for (let i = 0; i < contentSections.length; i += 1) {
        if (
          contentSections[i].offsetTop - window.innerHeight / 2 <
            window.pageYOffset &&
          contentSections[i].offsetTop +
            (contentSections[i].scrollHeight - window.innerHeight / 2) >
            window.pageYOffset
        ) {
          navigationItems[i].classList.add('is-selected')
        } else {
          navigationItems[i].classList.remove('is-selected')
        }
      }
    } else {
      console.warn(
        'Cannot update view as the number of content sections is different to number of navigation items. Perhaps you forgot to tag the navigation items or add ids to the sections?'
      )
    }
  }

  smoothScroll(target) {
    const targetScroll = document.getElementById(target)
    this.scrollGo(document.documentElement, targetScroll.offsetTop, 1250)
  }

  scrollGo(element, to, duration) {
    const start = element.scrollTop
    const change = to - start
    let currentTime = 0
    const increment = 20

    // TODO wtf is this? Bind it properly in a constructor to save future devs spending time figuring out what's going on here
    // eslint-disable-next-line func-names
    const animateScroll = function () {
      currentTime += increment
      element.scrollTop = this.easeInOutQuad(
        currentTime,
        start,
        change,
        duration
      )
      if (currentTime < duration) {
        setTimeout(animateScroll, increment)
      }
    }.bind(this)
    animateScroll()
  }

  render() {
    // TODO memoize this
    const sectionHashes = getSectionHashes(this.props.sections)
    return (
      <nav id="cd-vertical-nav">
        {sectionHashes.length > 0 ? (
          <ul>
            {sectionHashes.map((item, idx) => {
              return (
                <li key={item.hash}>
                  <a
                    href={`#${item.hash}`}
                    data-number="1"
                    className={idx === 0 ? 'is-selected' : ''}
                    onClick={(e) => {
                      const isMobile = navigator.userAgent.match(
                        /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
                      )
                      if (isMobile) {
                        // if we are on mobile device the scroll into view will be managed by the browser
                      } else {
                        e.preventDefault()
                        this.smoothScroll(`${item.hash}`)
                      }
                    }}
                  >
                    <span className="cd-dot" />
                    <span className="cd-label">{`#${item.heading}`}</span>
                  </a>
                </li>
              )
            })}
          </ul>
        ) : undefined}
      </nav>
    )
  }
}

Navigator.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      hash: PropTypes.string,
      heading: PropTypes.string,
    })
  ).isRequired,
}

export default Navigator
