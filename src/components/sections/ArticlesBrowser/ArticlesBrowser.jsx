import React, { useState } from 'react'
import { makeStyles, MenuItem } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import { useStaticQuery, graphql } from 'gatsby'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Select from '@material-ui/core/Select'
import ReactPaginate from 'react-paginate'
import { SectionHeading, SectionContainer, ArticleCard } from '../../elements'
import { Link } from '../../core/Link'
import './paginationCss.css'

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: '210px',
  },
  parentBox: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  articleTitle: {
    maxWidth: '356px',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  articleBox: {
    display: 'flex',
    marginTop: '32px',
    marginLeft: '-32px',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      marginLeft: '0',
    },
  },
  articleCardBox: {
    marginLeft: '32px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '0',
      marginTop: '20px',
    },
  },
  link: {
    textDecoration: 'none',
    color: 'white',
    fontSize: '18px',
    fontWeight: 400,
    lineHeight: '24px',
    marginRight: '16px',
    marginTop: '10px',
    paddingBottom: '15px',
    // "&:hover": {
    //     borderBottom: '1px solid red'
    //   }
  },
  showingBox: {
    marginTop: '50px',
  },
  cta: {
    display: 'flex',
    paddingTop: `8px`,
    paddingBottom: `8px`,
    backgroundColor: `#D31020`,
  },
  btnBox: {
    marginTop: '24px',
    justifyContent: 'center',
  },
  selectFieldBox: {
    display: 'none',
    backgroundColor: '#FFFFFF',
    marginBottom: '16px',
    width: '328px',
    borderRadius: '4px',
    paddingLeft: '16px',
    paddingRight: '16px',
    paddingBottom: '8px',
    marginTop: '32px',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
  select: {
    '&:before': {
      borderColor: '#FFFFFF',
    },
    '&:after': {
      borderColor: '#FFFFFF',
    },
    color: 'black',
    fontSize: '18px',
    fontWeight: 400,
    lineHeight: '24px',
    width: '300px',
  },
  icon: {
    fill: 'black',
  },
  linkBox: {
    display: 'block',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  paginationBox: {
    marginTop: '30px',
    marginLeft: '-52px',
  },
}))

const ArticlesBrowser = (rest) => {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query {
      img1: file(relativePath: { eq: "articles/img1.png" }) {
        childImageSharp {
          gatsbyImageData(quality: 90, width: 378)
        }
      }

      img2: file(relativePath: { eq: "articles/img2.png" }) {
        childImageSharp {
          gatsbyImageData(quality: 90, width: 378)
        }
      }

      img3: file(relativePath: { eq: "articles/img3.png" }) {
        childImageSharp {
          gatsbyImageData(quality: 90, width: 378)
        }
      }

      img4: file(relativePath: { eq: "articles/img4.png" }) {
        childImageSharp {
          gatsbyImageData(quality: 90, width: 378)
        }
      }

      img5: file(relativePath: { eq: "articles/img5.png" }) {
        childImageSharp {
          gatsbyImageData(quality: 90, width: 378)
        }
      }

      img6: file(relativePath: { eq: "articles/img6.png" }) {
        childImageSharp {
          gatsbyImageData(quality: 90, width: 378)
        }
      }
    }
  `)

  const results = [
    {
      image: data.img1.childImageSharp.gatsbyImageData,
      title: 'Achieving Scalability',
      description:
        'Quis viverra ut quam aliquet ipsum, habitasse congue. A vel justo at ultricies egestas. Eu lectus ullamcorper sed massa pharetra...',
    },
    {
      image: data.img2.childImageSharp.gatsbyImageData,
      title: 'Achieving Scalability',
      description:
        'Quis viverra ut quam aliquet ipsum, habitasse congue. A vel justo at ultricies egestas. Eu lectus ullamcorper sed massa pharetra...',
    },
    {
      image: data.img3.childImageSharp.gatsbyImageData,
      title: 'Achieving Scalability',
      description:
        'Quis viverra ut quam aliquet ipsum, habitasse congue. A vel justo at ultricies egestas. Eu lectus ullamcorper sed massa pharetra...',
    },
    {
      image: data.img4.childImageSharp.gatsbyImageData,
      title: 'Achieving Scalability',
      description:
        'Quis viverra ut quam aliquet ipsum, habitasse congue. A vel justo at ultricies egestas. Eu lectus ullamcorper sed massa pharetra...',
    },
    {
      image: data.img5.childImageSharp.gatsbyImageData,
      title: 'Achieving Scalability',
      description:
        'Quis viverra ut quam aliquet ipsum, habitasse congue. A vel justo at ultricies egestas. Eu lectus ullamcorper sed massa pharetra...',
    },
    {
      image: data.img2.childImageSharp.gatsbyImageData,
      title: 'Achieving Scalability',
      description:
        'Quis viverra ut quam aliquet ipsum, habitasse congue. A vel justo at ultricies egestas. Eu lectus ullamcorper sed massa pharetra...',
    },
    {
      image: data.img3.childImageSharp.gatsbyImageData,
      title: 'Achieving Scalability',
      description:
        'Quis viverra ut quam aliquet ipsum, habitasse congue. A vel justo at ultricies egestas. Eu lectus ullamcorper sed massa pharetra...',
    },
    {
      image: data.img2.childImageSharp.gatsbyImageData,
      title: 'Achieving Scalability',
      description:
        'Quis viverra ut quam aliquet ipsum, habitasse congue. A vel justo at ultricies egestas. Eu lectus ullamcorper sed massa pharetra...',
    },
    {
      image: data.img3.childImageSharp.gatsbyImageData,
      title: 'Achieving Scalability',
      description:
        'Quis viverra ut quam aliquet ipsum, habitasse congue. A vel justo at ultricies egestas. Eu lectus ullamcorper sed massa pharetra...',
    },
    {
      image: data.img4.childImageSharp.gatsbyImageData,
      title: 'Achieving Scalability',
      description:
        'Quis viverra ut quam aliquet ipsum, habitasse congue. A vel justo at ultricies egestas. Eu lectus ullamcorper sed massa pharetra...',
    },
    {
      image: data.img6.childImageSharp.gatsbyImageData,
      title: 'Achieving Scalability',
      description:
        'Quis viverra ut quam aliquet ipsum, habitasse congue. A vel justo at ultricies egestas. Eu lectus ullamcorper sed massa pharetra...',
    },
  ]

  const [articles] = useState(results)
  const [pageNumber, setPageNumber] = useState(0)
  const articlesPerPage = 3
  const pagesVisited = pageNumber * articlesPerPage

  const pageCount = Math.ceil(articles.length / articlesPerPage)

  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }

  return (
    <SectionContainer className={classes.container} {...rest}>
      <Box display="flex" className={classes.parentBox}>
        <Box className={classes.articleTitle}>
          <SectionHeading>{'Latest articles & resources'}</SectionHeading>
        </Box>
        <Box>
          <Box
            component="li"
            display="inline-flex"
            p={0}
            m={0}
            className={classes.linkBox}
          >
            <Link href="/" className={classes.link}>
              All
            </Link>
            <Link href="/" className={classes.link}>
              Engineering Consultancy{' '}
            </Link>
            <Link href="/" className={classes.link}>
              Digital Twins
            </Link>
            <Link href="/" className={classes.link}>
              Cool Science
            </Link>
            <Link href="/" className={classes.link}>
              Software Development
            </Link>
            <Link href="/" className={classes.link}>
              Applications
            </Link>
          </Box>
          <Box className={classes.selectFieldBox}>
            <Select
              id="select"
              value="1"
              className={classes.select}
              inputProps={{
                classes: {
                  icon: classes.icon,
                },
              }}
            >
              <MenuItem value="1">Showing - All</MenuItem>
              <MenuItem value="2">Engineering Consultancy</MenuItem>
              <MenuItem value="3">Digital Twins</MenuItem>
              <MenuItem value="4">Software Development</MenuItem>
            </Select>
          </Box>
          <Box className={classes.showingBox}>
            <Typography variant="body1" color="textSecondary" component="span">
              Showing 6 of 16
            </Typography>
          </Box>
        </Box>
        <Box>
          <Box className={classes.paginationBox}>
            <ReactPaginate
              previousLabel={'Previous'}
              nextLabel={'Next'}
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName={'paginationBttns'}
              previousLinkClassName={'previousBttn'}
              nextLinkClassName={'nextBttn'}
              disabledClassName={'paginationDisabled'}
              activeClassName={'paginationActive'}
            />
          </Box>
          <Box className={classes.articleBox}>
            {articles
              .slice(pagesVisited, pagesVisited + articlesPerPage)
              .map((article) => {
                return (
                  <Box className={classes.articleCardBox}>
                    <ArticleCard
                      image={article.image}
                      title={article.title}
                      description={article.description}
                    />
                  </Box>
                )
              })}
          </Box>
        </Box>
        <Box className={classes.articleBox}>
          <Box className={classes.articleCardBox}>
            <ArticleCard
              image={data.img4.childImageSharp.gatsbyImageData}
              title="Amet dolor"
              description="Quis viverra ut quam aliquet ipsum, habitasse congue. A vel justo at ultricies egestas. Eu lectus ullamcorper sed massa pharetra..."
            />
          </Box>
          <Box className={classes.articleCardBox}>
            <ArticleCard
              image={data.img5.childImageSharp.gatsbyImageData}
              title="Lorem ipsum amet"
              description="Quis viverra ut quam aliquet ipsum, habitasse congue. A vel justo at ultricies egestas. Eu lectus ullamcorper sed massa pharetra..."
            />
          </Box>
          <Box className={classes.articleCardBox}>
            <ArticleCard
              image={data.img6.childImageSharp.gatsbyImageData}
              title="Lorem ipsum amet dolor"
              description="Quis viverra ut quam aliquet ipsum, habitasse congue. A vel justo at ultricies egestas. Eu lectus ullamcorper sed massa pharetra..."
            />
          </Box>
        </Box>
        <Box display="flex" className={classes.btnBox}>
          <Button className={classes.cta} variant="outlined">
            Show more
          </Button>
        </Box>
      </Box>
    </SectionContainer>
  )
}

export default ArticlesBrowser
