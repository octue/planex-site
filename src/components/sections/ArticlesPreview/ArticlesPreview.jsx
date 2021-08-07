import React from 'react'
import { makeStyles } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import { SectionHeading, ArticleCard } from '../../elements'
import { useStaticQuery, graphql } from 'gatsby'

const useStyles = makeStyles((theme) => ({
  bgColor: {
    backgroundColor: theme.palette.background.default,
  },
  container: {
    height: '100%',
    paddingTop: '235px',
  },
  parentBox: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '60px',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      marginLeft: '0',
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
const TwinedArticleSection = () => {
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
    <section className={classes.bgColor}>
      <Container maxWidth="lg" className={classes.container}>
        <Box display="flex" className={classes.parentBox}>
          <Box className={classes.articleTitle}>
            <SectionHeading text="Articles" />
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
      </Container>
    </section>
  )
}

export default TwinedArticleSection
