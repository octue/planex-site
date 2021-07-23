import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import { makeStyles, useTheme } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import { SectionTitle } from '../../elements'

const useStyles = makeStyles((theme) => ({
  grid: {},
  description: {
    color: theme.palette.text.secondary,
    fontSize: '1.313rem',
    fontWeight: 400,
    lineHeight: '1.9rem',
    whiteSpace: 'pre-line',
  },
  cta: {
    display: 'flex',
    border: `2px solid ${theme.palette.text.secondary}`,
    paddingTop: `10px`,
    paddingBottom: `10px`,
  },
}))

function JoinTheMovement({ id, onGetInvolved }) {
  const classes = useStyles()
  const theme = useTheme()

  return (
    <section id="join-the-movement">
      <Container>
        <Grid container spacing={0} className={classes.grid}>
          <Grid item sm={12} md={6}>
            <SectionTitle>Join the movement</SectionTitle>
          </Grid>
          <Grid item sm={12} md={6}>
            <Box width="100%">
              <Typography variant="body1">
                Octue is a non-profit organisation working to free scientists
                from their daily data drudgery. Here are the latest supporters
                contributing to our codebase.
              </Typography>
            </Box>
            <Box width="100%">Button</Box>
            <Box width="100%">Hexes</Box>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

JoinTheMovement.defaultProps = {
  onGetInvolved: () => console.log('clicked onGetInvolved'),
}

JoinTheMovement.propTypes = {
  onGetInvolved: PropTypes.func,
}

export default JoinTheMovement
