import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { makeStyles, useTheme } from '@material-ui/core'
import { Link } from '../../core'

const useStyles = makeStyles((theme) => ({
  logo: {
    height: '36px',
  },
}))

function LogoLink({ logoClasses, ...rest }) {
  const classes = useStyles()
  const theme = useTheme()
  const logoClassName = classNames(classes.logo, logoClasses)
  return (
    <Link {...rest}>
      <img
        src={theme.logos.text[theme.palette.type]}
        alt="logo"
        className={logoClassName}
      />
    </Link>
  )
}

LogoLink.defaultProps = {
  href: '/',
}

LogoLink.propTypes = {
  /**
   * The href to where the logo links
   */
  href: PropTypes.string,
}

export default LogoLink
