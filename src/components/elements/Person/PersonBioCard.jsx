import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core'
import Typography from '../../elements/Typography'
import Box from '@material-ui/core/Box'
import { Link } from '../../core/Link'

const useStyles = makeStyles((theme) => ({
  name: {
    display: 'flex',
    color: theme.palette.text.primary,
  },
  role: {
    display: 'flex',
    color: theme.palette.text.primary,
  },
  bio: {
    color: theme.palette.text.secondary,
  },
  titleBox: {
    marginBottom: '1px',
  },
  linkBox: {
    overflowX: 'hidden',
    width: '100%',
    flexWrap: 'wrap',
  },
  link: {
    display: 'flex',
    textDecoration: 'none',
    color: theme.palette.text.primary,
    marginRight: '16px',
    marginTop: '10px',
  },
}))

const PersonBioCard = ({
  name,
  role,
  bio,
  github,
  linkedin,
  twitter,
  ...rest
}) => {
  const classes = useStyles()

  return (
    <>
      <Box {...rest}>
        <Box display="flex">
          <Typography
            balance
            variant="h4"
            component="h3"
            className={classes.name}
          >
            {name}
          </Typography>
        </Box>
        <Box display="flex" mt="6px">
          {role && (
            <Typography
              balance
              variant="h5"
              component="h4"
              className={classes.role}
            >
              {role}
            </Typography>
          )}
        </Box>
        <Box width="100%" mt={2}>
          {bio && (
            <Typography balance variant="body1" className={classes.bio}>
              {bio}
            </Typography>
          )}
        </Box>
        <Box display="inline-flex" p={0} m={0} className={classes.linkBox}>
          {twitter && (
            <Link
              kind="external"
              variant="typography"
              href={twitter}
              className={classes.link}
            >
              <Typography variant="body2">Twitter</Typography>
            </Link>
          )}
          {linkedin && (
            <Link
              kind="external"
              href={linkedin}
              className={classes.link}
              variant="typography"
            >
              <Typography variant="body2">LinkedIn</Typography>
            </Link>
          )}
          {github && (
            <Link
              kind="external"
              href={github}
              className={classes.link}
              variant="typography"
            >
              <Typography variant="body2">GitHub</Typography>
            </Link>
          )}
        </Box>
      </Box>
    </>
  )
}

PersonBioCard.defaultProps = {}

PersonBioCard.propTypes = {
  firstName: PropTypes.string,
  secondName: PropTypes.string,
  role: PropTypes.string,
  bio: PropTypes.string,
  github: PropTypes.string,
  twitterHandle: PropTypes.string,
  linkedin: PropTypes.string,
}

export default PersonBioCard
