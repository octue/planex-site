import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { makeStyles } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Typography from '../../elements/Typography'
import ArrowRightAlt from '@material-ui/icons/ArrowRightAlt'
import DatoLink from '../../core/DatoLink'

const useStyles = makeStyles((theme) => ({
  bgColor: {
    backgroundColor: theme.palette.background.default,
  },
  image: {
    width: '100%',
    borderRadius: theme.shape.borderRadius,
    marginBottom: theme.spacing(2),
  },
  cardBox: {
    width: '100%',
    maxWidth: '300px',
  },
}))

function ArticleCard({ alt, image, title, precis, url, ...rest }) {
  const classes = useStyles()
  return (
    <Box className={classes.cardBox} {...rest}>
      <Grid container spacing={6}>
        <Grid item>
          <GatsbyImage
            image={image.gatsbyImageData}
            alt={image.alt}
            title={image.title}
            className={classes.image}
          />
          <Box mt={1} display="flex" justifyContent="space-between">
            <Typography
              balance
              variant="subtitle1"
              color="textPrimary"
              gutterBottom
            >
              {title}
            </Typography>
          </Box>
          <Box pb={2} mx={2}>
            <Typography balance variant="body1" color="textSecondary">
              {precis}
            </Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <DatoLink url={url} openInNewTab>
              <Button variant="outlined" endIcon={<ArrowRightAlt />}>
                Read more
              </Button>
            </DatoLink>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

ArticleCard.defaultProps = {}

ArticleCard.propTypes = {}

export default ArticleCard
