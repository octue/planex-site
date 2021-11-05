import React from 'react'
import { makeStyles } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import Pagination from '@material-ui/lab/Pagination'
import Typography from '@material-ui/core/Typography'
import ArticleCard from '../../elements/ArticleCard'
import SectionGrid from '../../elements/SectionGrid'

const useStyles = makeStyles((theme) => ({
  paginationBox: {
    marginTop: theme.spacing(6),
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

  const before = (
    <Box my={6}>
      <Typography variant="body1" color="textSecondary" component="span">
        {showing}
      </Typography>
    </Box>
  )

  const after = (
    <Box display="flex" className={classes.paginationBox}>
      <Pagination
        count={pageCount}
        variant="outlined"
        shape="rounded"
        page={page}
        onChange={onPageChange}
      />
    </Box>
  )

  return (
    <SectionGrid
      xs={12}
      sm={6}
      md={4}
      centerItems
      after={after}
      before={before}
      {...rest}
    >
      {articles && articles.map((article) => <ArticleCard {...article} />)}
    </SectionGrid>
  )
}

export default ArticlesBrowser
