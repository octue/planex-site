import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core'
import classNames from 'classnames'
import Box from '@material-ui/core/Box'
import Link from '../../core/Link'

const useStyles = makeStyles((theme) => ({
  icon: {
    fontSize: '18px',
  },
}))

function FooterItem({ href, kind, style, icon, text }) {
  const classes = useStyles()

  const linkClasses = classNames(classes[style])

  const iconClasses = classNames(classes.icon, {
    [classes.iconSpaced]: icon && text,
  })

  const TheIcon = icon // Because `icon` would compile as a dom tag
  return (
    <Box component="li" display="inline-flex" p={0} m={0}>
      <Link
        kind={kind || 'site'}
        href={href}
        componentType="iconButton"
        className={linkClasses}
      >
        {icon ? <TheIcon className={iconClasses} /> : null}
        {text || null}
      </Link>
    </Box>
  )
}

FooterItem.defaultProps = {
  style: 'link',
}

FooterItem.propTypes = {
  style: PropTypes.oneOf(['icon', 'button']),
}

export default FooterItem
