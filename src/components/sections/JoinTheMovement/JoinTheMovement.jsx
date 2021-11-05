import React from 'react'
import Box from '@material-ui/core/Box'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import SectionHeading from '../../elements/SectionHeading'
import Typography from '@material-ui/core/Typography'
import SectionContainer from '../../elements/SectionContainer'
import { Hexagon } from '../../hexagon'
import DatoLink from '../../core/DatoLink'
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle'
const useStyles = makeStyles((theme) => ({
  hexagonBox: {
    marginTop: theme.spacing(2),
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'space-evenly',
    },
  },
  hexagonLink: {
    margin: theme.spacing(1),
    display: 'flex',
  },
  ctaBox: {
    marginTop: theme.spacing(3),
    display: 'flex',
    justifyContent: 'flex-end',
  },
}))

function JoinTheMovement({
  id,
  heading,
  description,
  githubCollaborators,
  link,
}) {
  const classes = useStyles()
  console.log('JTM LINK', link)
  return (
    <SectionContainer id={id}>
      <Grid container spacing={0}>
        <Grid item sm={12} md={6}>
          <SectionHeading>{heading}</SectionHeading>
        </Grid>
        <Grid item sm={12} md={6}>
          <Typography align="justify" variant="body1" color="textSecondary">
            {description}
          </Typography>
          <Box className={classes.hexagonBox}>
            {githubCollaborators.map((item) => (
              <DatoLink
                url={`https://www.github.com/${item.handle}/`}
                openInNewTab
                wrap
                className={classes.hexagonLink}
              >
                <Hexagon variant="small" image={item.avatar} />
              </DatoLink>
            ))}
          </Box>
          <Box className={classes.ctaBox}>
            <DatoLink {...link[0]}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                startIcon={<SupervisedUserCircleIcon />}
              >
                Get involved
              </Button>
            </DatoLink>
          </Box>
        </Grid>
      </Grid>
    </SectionContainer>
  )
}

JoinTheMovement.defaultProps = {
  id: 'join-the-movement',
  githubCollaborators: [],
}

JoinTheMovement.propTypes = {
  id: PropTypes.string,
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  githubCollaborators: PropTypes.arrayOf(
    PropTypes.shape({
      handle: PropTypes.string.isRequired,
      avatar: PropTypes.shape({
        gatsbyImageData: PropTypes.object.isRequired,
      }).isRequired,
    })
  ),
}

export default JoinTheMovement
