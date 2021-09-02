import React from 'react'
import { makeStyles } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Pagination from '@material-ui/lab/Pagination'
import Typography from '@material-ui/core/Typography'
import { SectionContainer, ArticleCard } from '../../elements'

const useStyles = makeStyles((theme) => ({
  parentBox: {
    display: 'flex',
    flexDirection: 'column',
  },
  articleCardBox: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: theme.spacing(6),
  },
  paginationBox: {
    marginTop: theme.spacing(4),
    justifyContent: 'center',
  },
}))

const ArticlesBrowser = ({
  articles,
  articlesCount,
  itemsPerPage,
  loading,
  onItemsPerPageChange,
  onPageChange,
  page,
  pageCount,
  ...rest
}) => {
  const classes = useStyles()

  const showingStart = (page - 1) * itemsPerPage + 1
  const showingEnd =
    articlesCount && Math.min(articlesCount, page * itemsPerPage)
  const showing = articlesCount
    ? `Showing ${showingStart} to ${showingEnd} of ${articlesCount}`
    : null

  return (
    <SectionContainer {...rest}>
      <Box display="flex" className={classes.parentBox}>
        <Box my={6}>
          <Typography variant="body1" color="textSecondary" component="span">
            {showing}
          </Typography>
        </Box>
        <Grid container spacing={3}>
          {articles &&
            articles.map((article) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                key={article.id}
                className={classes.articleCardBox}
              >
                <ArticleCard {...article} />
              </Grid>
            ))}
        </Grid>
        <Box display="flex" className={classes.paginationBox}>
          <Pagination
            count={pageCount}
            variant="outlined"
            shape="rounded"
            page={page}
            onChange={onPageChange}
          />
        </Box>
      </Box>
    </SectionContainer>
  )
}

export default ArticlesBrowser
