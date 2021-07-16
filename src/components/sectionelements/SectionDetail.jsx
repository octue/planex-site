import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
const useStyles = makeStyles((theme) => ({
  container: {
    height: '100%',
  },
  title: {
    display: 'flex',
    color: theme.palette.text.primary,
    fontSize: '1.35rem',
    fontWeight: 400,
    lineHeight: '1.5rem',
  },
  description: {
    color: theme.palette.text.secondary,
    fontSize: '1rem',
    fontWeight: 300,
    lineHeight: '1.2rem',
    whiteSpace: 'pre-line',
  },
  cta: {
    display: 'flex',
    paddingTop: `8px`,
    paddingBottom: `8px`,
    backgroundColor: `#D31020`,
  },
}))
const SectionDetail = ({ heading, description, button, onClick }) => {
  const classes = useStyles()
  const theme = useTheme()
  return (
    <>
      <Box>
        <Box display="flex" pb={3}>
          <Typography variant="h2" component="h1" className={classes.title}>
            {heading}
          </Typography>
        </Box>
        <Box display="flex" pb={3}>
          <Typography
            variant="subtitle1"
            component="h2"
            className={classes.description}
          >
            {description}
          </Typography>
        </Box>

        {button && (
          <Box display="flex">
            <Button
              className={classes.cta}
              variant="outlined"
              onClick={onClick}
            >
              {button}
            </Button>
          </Box>
        )}
      </Box>
    </>
  )
}

export default SectionDetail
