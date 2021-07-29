import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import { Link } from '../core/Link'

const useStyles = makeStyles((theme) => ({
  container: {
    height: '100%',
  },
  titleOne: {
    display: 'flex',
    color: theme.palette.text.primary,
    fontSize: '24px',
    fontWeight: 400,
    lineHeight: '30px',
  },
  titleTwo: {
    display: 'flex',
    color: theme.palette.text.primary,
    fontSize: '20px',
    fontWeight: 400,
    lineHeight: '24px',
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
    marginBottom: '1px',
  },
  descriptionBox: {
    marginTop: '8px',
  },
  link: {
    textDecoration: 'none',
    color: 'white',
    fontSize: '18px',
    fontWeight: 400,
    lineHeight: '24px',
    marginRight: '16px',
    marginTop: '10px',
  },
}))

const SectionDetailWithTwoHeading = ({
  headingOne,
  headingTwo,
  description,
}) => {
  const classes = useStyles()
  return (
    <>
      <Box>
        <Box display="flex" className={classes.titleBox}>
          <Typography variant="h2" component="h1" className={classes.titleOne}>
            {headingOne}
          </Typography>
        </Box>
        <Box display="flex" className={classes.titleBox}>
          <Typography variant="h3" component="h2" className={classes.titleTwo}>
            {headingTwo}
          </Typography>
        </Box>
        <Box display="flex" className={classes.descriptionBox}>
          <Typography
            variant="subtitle1"
            component="h2"
            className={classes.description}
          >
            {description}
          </Typography>
        </Box>
        <Box component="li" display="inline-flex" p={0} m={0}>
          <Link href="/" className={classes.link}>
            Twitter
          </Link>
          <Link href="/" className={classes.link}>
            LinkedIn{' '}
          </Link>
          <Link href="/" className={classes.link}>
            GitHub
          </Link>
        </Box>
      </Box>
    </>
  )
}

SectionDetailWithTwoHeading.defaultProps = {}

SectionDetailWithTwoHeading.propTypes = {
  headingOne: PropTypes.string,
  headingTwo: PropTypes.string,
  description: PropTypes.string,
}

export default SectionDetailWithTwoHeading
