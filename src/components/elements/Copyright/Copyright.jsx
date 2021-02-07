import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import { useTheme } from '@material-ui/core/styles'
import { Link } from 'gatsby-theme-material-ui'
import Typography from '@material-ui/core/Typography'


const useStyles = makeStyles((theme) => ({
  link: {
    color: 'inherit',
    '&,&:hover,&:focus': {
      color: 'inherit',
    },
  },
}))


function Copyright({
  fixed,
  href,
  color,
}) {

  const theme = useTheme()
  const classes = useStyles()

  const year = new Date().getFullYear()

  const linkComponent = (
    <Typography variant="body2" color={color}>
      {'Copyright © '}
      <Link className={classes.link} href={href}>
        Octue Ltd
      </Link>
      {` ${year}.`}
    </Typography>
  )

  if (fixed) {
    return (
      <Box
        position="fixed"
        bottom={theme.spacing(1)}
        right={theme.spacing(1)}
      >
        {linkComponent}
      </Box>
    )
  }
  return linkComponent

}

Copyright.defaultProps = {
  fixed: true,
  href: 'https://www.octue.com',
  color: "textSecondary",
}

Copyright.propTypes = {
  fixed: PropTypes.bool,
  href: PropTypes.string,
  color: PropTypes.string,
}

export default Copyright
