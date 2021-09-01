import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { makeStyles } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Typography from '../../elements/Typography'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt'

const useStyles = makeStyles((theme) => ({
  bgColor: {
    backgroundColor: theme.palette.background.default,
  },
  articlesImage: {
    width: '100%',
    height: '256px',
    borderRadius: theme.shape.borderRadius,
    marginBottom: theme.spacing(2),
  },
  cardBox: {
    width: '378px',
    [theme.breakpoints.down('sm')]: {
      width: '328px',
    },
  },
  readMoreFontWeight: {
    fontWeight: 400,
  },
}))

function ArticleCard({ image, title, description }) {
  const classes = useStyles()
  return (
    <section className={classes.bgColor}>
      <Box className={classes.cardBox}>
        <Grid container spacing={6}>
          <Grid item>
            <GatsbyImage image={image} className={classes.articlesImage} />
            <Box display="flex" justifyContent="space-between">
              <Typography balance variant="subtitle1" color="textPrimary">
                {title}
              </Typography>
            </Box>
            <Box pb={1}>
              <Typography
                balance
                variant="body1"
                color="textSecondary"
                component="span"
              >
                {description}
              </Typography>
            </Box>
            <Box display="flex" alignItems="center">
              <Typography
                variant="body1"
                color="textSecondary"
                component="span"
                className={classes.readMoreFontWeight}
              >
                Read more
              </Typography>
              <ArrowRightAltIcon style={{ color: 'white' }} />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </section>
  )
}

ArticleCard.defaultProps = {}

ArticleCard.propTypes = {}

export default ArticleCard
