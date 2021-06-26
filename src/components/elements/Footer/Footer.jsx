import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Copyright from '../Copyright'
import { LogoLink } from '../../core'
import FooterItems from './FooterItems'
import FooterLinks from './FooterLinks'

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
  },
}))

function Footer({ id }) {
  const classes = useStyles()

  return (
    <footer id={id} className={classes.footer}>
      <Container>
        <Box display="flex" justify="space-between" alignItems="stretch">
          <Box
            flexGrow={1}
            display="flex"
            flexDirection="column"
            flexWrap="nowrap"
            justify="space-between"
            alignItems="flex-start"
          >
            <Box flexGrow={1}>
              <LogoLink />
            </Box>
            <Box mb={1} py="4px">
              <Copyright />
            </Box>
          </Box>
          <Box>
            <Box>
              <FooterItems />
            </Box>
            <Box>
              <FooterLinks />
            </Box>
          </Box>
        </Box>
      </Container>
    </footer>
  )
}

Footer.defaultProps = {
  id: 'footer',
}

Footer.propTypes = {
  id: PropTypes.string,
}

export default Footer
