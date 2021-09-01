import React from 'react'
import Box from '@material-ui/core/Box'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import SectionHeading from '../../elements/SectionHeading'
import SectionDetail from '../../elements/SectionDetail'
import SectionContainer from '../../elements/SectionContainer'
import { Hexagon } from '../../hexagon'
import DatoLink from '../../core/DatoLink'

const useStyles = makeStyles((theme) => ({
  hexagonBox: {
    marginTop: '2rem',
    display: 'flex',
    justifyContent: 'start',
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
}))

function JoinTheMovement({
  id,
  heading,
  description,
  githubCollaborators,
  link,
}) {
  const classes = useStyles()

  return (
    <SectionContainer id={id}>
      <Grid container spacing={0}>
        <Grid item sm={12} md={6}>
          <SectionHeading>{heading}</SectionHeading>
        </Grid>
        <Grid item sm={12} md={6}>
          <SectionDetail description={description}>
            <DatoLink {...link}>
              <Button variant="contained" color="secondary">
                Get involved
              </Button>
            </DatoLink>
          </SectionDetail>
          <Box className={classes.hexagonBox}>
            {githubCollaborators.map((item) => (
              <DatoLink
                url={`https://www.github.com/${item.handle}/`}
                openInNewTab
                wrap
                className={classes.hexagonLink}
              >
                <Hexagon variant="small" {...item.avatar} />
              </DatoLink>
            ))}
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
