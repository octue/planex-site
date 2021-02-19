import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Copyright from '../../elements/Copyright'
import BackgroundBox from '../../layout/BackgroundBox'

const useStyles = makeStyles({
  code: {
    fontSize: '200px',
    lineHeight: '240px',
    fontWeight: '700',
  },
  subTitle: {
    fontSize: '2.25rem',
    marginTop: '0',
    marginBottom: '8px',
    zIndex: 3,
  },
  description: {
    fontSize: '1.125rem',
    marginTop: '0',
    zIndex: 3,
    marginBottom: '8px',
  },
  dimmed: {
    position: 'relative',
    '&:after': {
      content: '""',
      zIndex: 2,
      display: 'block',
      position: 'absolute',
      height: '100%',
      top: 0,
      left: 0,
      right: 0,
      background: 'rgba(0, 0, 0, 0.5)',
    },
  },
})

function ErrorPage({ code, text, description }) {
  const classes = useStyles()

  return (
    <main className={classes.content}>
      <BackgroundBox className={classes.dimmed}>
        <Box maxWidth="80vw" textAlign="center" color="#ffffff" zIndex={3}>
          <Typography variant="h1" className={classes.code}>
            {code}
          </Typography>
          <Typography variant="h3">{text}</Typography>
          <Typography variant="subtitle1">{description}</Typography>
        </Box>
      </BackgroundBox>
      <Copyright paper />
    </main>
  )
}

ErrorPage.propTypes = {
  code: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default ErrorPage
