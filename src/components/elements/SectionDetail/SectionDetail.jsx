import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
  container: {
    height: '100%',
  },
  description: {
    color: theme.palette.text.secondary,
    fontSize: '18px',
    fontWeight: 300,
    lineHeight: '26px',
    // whiteSpace: 'pre-line',
  },
  cta: {
    display: 'flex',
    paddingTop: `8px`,
    paddingBottom: `8px`,
    backgroundColor: `#D31020`,
  },
  btnBox: {
    marginTop: '24px',
  },
  titleBox: {
    marginBottom: '16px',
  },
}))
const SectionDetail = ({ heading, description, button, onClick }) => {
  const classes = useStyles()

  return (
    <>
      <Box>
        <Box display="flex" className={classes.titleBox}>
          <Typography variant="subtitle1" color="textPrimary">
            {heading}
          </Typography>
        </Box>
        <Box display="flex">
          <Typography
            variant="subtitle1"
            component="h2"
            className={classes.description}
          >
            {description}
          </Typography>
        </Box>

        {button && (
          <Box display="flex" className={classes.btnBox}>
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

SectionDetail.defaultProps = {}

SectionDetail.propTypes = {
  heading: PropTypes.string,
  description: PropTypes.string,
}

export default SectionDetail
