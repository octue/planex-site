import React from 'react'
import { makeStyles, MenuItem } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import SectionHeading from '../SectionHeading'
import ArticlesCard from '../ArticlesCard'
import { useStaticQuery, graphql } from 'gatsby'
import { Link } from '../../core/Link'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Select from '@material-ui/core/Select'

const useStyles = makeStyles((theme) => ({
  bgColor: {
    backgroundColor: theme.palette.background.default,
  },
  container: {
    height: '100%',
    paddingTop: '210px',
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
}))
const LatestArticlesSection = () => {
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
  return (
    <section className={classes.bgColor}>
      <Container maxWidth="lg" className={classes.container}>
        <Box display="flex" className={classes.parentBox}>
          <Box className={classes.articleTitle}>
            <SectionHeading text="Latest articles & resources" />
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
              <Typography
                variant="body1"
                color="textSecondary"
                component="span"
              >
                Showing 6 of 16
              </Typography>
            </Box>
          </Box>
          <Box className={classes.articleBox}>
            <Box className={classes.articleCardBox}>
              <ArticlesCard
                image={data.img1.childImageSharp.gatsbyImageData}
                title="Achieving Scalability"
                description="Quis viverra ut quam aliquet ipsum, habitasse congue. A vel justo at ultricies egestas. Eu lectus ullamcorper sed massa pharetra..."
              />
            </Box>
            <Box className={classes.articleCardBox}>
              <ArticlesCard
                image={data.img2.childImageSharp.gatsbyImageData}
                title="CBA to choose a stack?"
                description="Quis viverra ut quam aliquet ipsum, habitasse congue. A vel justo at ultricies egestas. Eu lectus ullamcorper sed massa pharetra..."
              />
            </Box>
            <Box className={classes.articleCardBox}>
              <ArticlesCard
                image={data.img3.childImageSharp.gatsbyImageData}
                title="Fluid Dynamicist"
                description="Quis viverra ut quam aliquet ipsum, habitasse congue. A vel justo at ultricies egestas. Eu lectus ullamcorper sed massa pharetra..."
              />
            </Box>
          </Box>
          <Box className={classes.articleBox}>
            <Box className={classes.articleCardBox}>
              <ArticlesCard
                image={data.img4.childImageSharp.gatsbyImageData}
                title="Amet dolor"
                description="Quis viverra ut quam aliquet ipsum, habitasse congue. A vel justo at ultricies egestas. Eu lectus ullamcorper sed massa pharetra..."
              />
            </Box>
            <Box className={classes.articleCardBox}>
              <ArticlesCard
                image={data.img5.childImageSharp.gatsbyImageData}
                title="Lorem ipsum amet"
                description="Quis viverra ut quam aliquet ipsum, habitasse congue. A vel justo at ultricies egestas. Eu lectus ullamcorper sed massa pharetra..."
              />
            </Box>
            <Box className={classes.articleCardBox}>
              <ArticlesCard
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
      </Container>
    </section>
  )
}

export default LatestArticlesSection
