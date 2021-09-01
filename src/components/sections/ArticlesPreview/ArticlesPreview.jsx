import React from 'react'
import { makeStyles } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import { SectionHeading, SectionContainer, ArticleCard } from '../../elements'
import { useStaticQuery, graphql } from 'gatsby'

const useStyles = makeStyles((theme) => ({
  parentBox: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  articleTitle: {
    maxWidth: '456px',
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
}))
const ArticlesPreview = (rest) => {
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
    }
  `)
  return (
    <SectionContainer {...rest}>
      <Box display="flex" className={classes.parentBox}>
        <Box className={classes.articleTitle}>
          <SectionHeading>Articles</SectionHeading>
        </Box>
        <Box className={classes.articleBox}>
          <Box className={classes.articleCardBox}>
            <ArticleCard
              image={data.img1.childImageSharp.gatsbyImageData}
              title="Achieving Scalability"
              description="Quis viverra ut quam aliquet ipsum, habitasse congue. A vel justo at ultricies egestas. Eu lectus ullamcorper sed massa pharetra..."
            />
          </Box>
          <Box className={classes.articleCardBox}>
            <ArticleCard
              image={data.img2.childImageSharp.gatsbyImageData}
              title="Achieving Scalability"
              description="Quis viverra ut quam aliquet ipsum, habitasse congue. A vel justo at ultricies egestas. Eu lectus ullamcorper sed massa pharetra..."
            />
          </Box>
          <Box className={classes.articleCardBox}>
            <ArticleCard
              image={data.img3.childImageSharp.gatsbyImageData}
              title="Achieving Scalability"
              description="Quis viverra ut quam aliquet ipsum, habitasse congue. A vel justo at ultricies egestas. Eu lectus ullamcorper sed massa pharetra..."
            />
          </Box>
        </Box>
      </Box>
    </SectionContainer>
  )
}

export default ArticlesPreview
