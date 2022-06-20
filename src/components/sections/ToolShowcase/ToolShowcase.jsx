import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './slick-theme.css'

import { SectionContainer, SectionHeading } from '../../elements'

import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt'
import Box from '@material-ui/core/Box'
import DatoCmsCtaLink from '../../../containers/dato/DatoCmsCtaLink'
import React from 'react'
import Slider from 'react-slick'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core'

const SLIDER_SETTINGS = {
  dots: true,
  autoplay: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
}

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: '2.2rem',
    marginBottom: theme.spacing(2),
  },
  subtitle: {
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(3),
  },
  arrowIcon: {
    marginTop: '2px',
    marginLeft: '-4px',
    marginRight: '12px',
  },
}))

const SlideHeading = ({ children }) => {
  const classes = useStyles()
  return (
    <Typography
      gutterBottom
      color="textPrimary"
      variant="h3"
      component="h2"
      className={classes.title}
    >
      {children}
    </Typography>
  )
}

const SlideCaption = ({ children }) => {
  const classes = useStyles()
  return (
    <Typography
      color="textSecondary"
      gutterBottom
      variant="body1"
      className={classes.subtitle}
    >
      {children}
    </Typography>
  )
}

const ArrowBullet = ({ children }) => {
  const classes = useStyles()
  return (
    <Box display="flex">
      <Box className={classes.arrowIcon}>
        <ArrowRightAltIcon style={{ color: 'white' }} />
      </Box>
      <Typography gutterBottom color="textPrimary" variant="body1">
        {children}
      </Typography>
    </Box>
  )
}

const SchemaAsStrandsSlide = () => {
  const classes = useStyles()
  return (
    <Box display="flex" justifyContent="center" mb={3} mx={4}>
      <Box maxWidth={750}>
        <SlideHeading>Introducing Strands...</SlideHeading>
        <SlideCaption>
          Schema are a pain to work with, whoever you are... but they're the
          cornerstone of communication around data.
        </SlideCaption>
        <Box mt={1} ml={2} mb={2}>
          <ArrowBullet>Build, publish and evolve schema with ease</ArrowBullet>
          <ArrowBullet>
            Search for, use, modify or nest existing schema
          </ArrowBullet>
          <ArrowBullet>
            Show your colleagues what data you need with a click
          </ArrowBullet>
          <ArrowBullet>
            Globally-optimised CDN for lightning fast fetch and validation
          </ArrowBullet>
        </Box>
        <DatoCmsCtaLink
          display="flex"
          justifyContent="flex-end"
          url="https://www.octue.com/contact"
          text="Ask us for early access"
        ></DatoCmsCtaLink>
      </Box>
    </Box>
  )
}

const DatasetsSdkSlide = () => {
  const classes = useStyles()
  return (
    <Box display="flex" justifyContent="center" mb={3}>
      <Box maxWidth={750}>
        <SlideHeading>Ditch the external drive</SlideHeading>
        <SlideCaption>
          The Python SDK provides tools for you to work with both local and
          cloud data files.
        </SlideCaption>
        <Box mt={1} ml={2} mb={2}>
          <ArrowBullet>Create, tag and upload datasets</ArrowBullet>
          <ArrowBullet>
            Search, filter and share datasets from cloud storage
          </ArrowBullet>
          <ArrowBullet>
            Shift between your local machine and the cloud, quickly and robustly
          </ArrowBullet>
          <ArrowBullet>
            Tag existing data in buckets to make it searchable
          </ArrowBullet>
        </Box>
        {/* <Box> */}
        <DatoCmsCtaLink
          display="flex"
          justifyContent="flex-end"
          url="https://octue-python-sdk.readthedocs.io/en/latest/index.html"
          text="Get started with datasets"
        ></DatoCmsCtaLink>
        {/* </Box> */}
      </Box>
    </Box>
  )
}

const WrapYourCodeSlide = () => {
  const classes = useStyles()
  return (
    <Box display="flex" justifyContent="center" mb={3}>
      <Box maxWidth={750}>
        <SlideHeading>Wrap your code</SlideHeading>
        <SlideCaption>
          With the Python SDK, you can wrap up existing scientific code as a
          data service.
        </SlideCaption>
        <Box mt={1} ml={2} mb={2}>
          <ArrowBullet>Build digital twins and other data services</ArrowBullet>
          <ArrowBullet>Follow a simple question-answer pattern</ArrowBullet>
          <ArrowBullet>
            Ask and answer questions between colleagues, teams and companies.
          </ArrowBullet>
          <ArrowBullet>Assemble networks of linked data services</ArrowBullet>
          <ArrowBullet>
            Deploy your expertise for colleagues and customers to use
          </ArrowBullet>
        </Box>
        {/* <Box> */}
        <DatoCmsCtaLink
          display="flex"
          justifyContent="flex-end"
          url="https://octue-python-sdk.readthedocs.io/en/latest/index.html"
          text="Get started with data services"
        ></DatoCmsCtaLink>
        {/* </Box> */}
      </Box>
    </Box>
  )
}

const CloudStoreMeetPostgresSlide = () => {
  const classes = useStyles()
  return (
    <Box display="flex" justifyContent="center" mb={3}>
      <Box maxWidth={750}>
        <SlideHeading>Data store, meet PostGRES!</SlideHeading>
        <SlideCaption>
          Use django-twined to integrate your data store and your django
          webserver.
        </SlideCaption>
        <Box mt={1} ml={2} mb={2}>
          <ArrowBullet>
            Provide data-as-a-service straight from your cloud stores
          </ArrowBullet>
          <ArrowBullet>
            Build a server with fine-level access control to datasets
          </ArrowBullet>
          <ArrowBullet>
            Sync dataset metadata for fast search and querying of files in
            postgres
          </ArrowBullet>
          <ArrowBullet>
            Add your own payment gateway to sell data access
          </ArrowBullet>
        </Box>
        <DatoCmsCtaLink
          display="flex"
          justifyContent="flex-end"
          url="https://github.com/octue/django-twined"
          text="See the django plugin"
        ></DatoCmsCtaLink>
      </Box>
    </Box>
  )
}

const ProvideDataServicesSlide = () => {
  const classes = useStyles()
  return (
    <Box display="flex" justifyContent="center" mb={3}>
      <Box maxWidth={750}>
        <SlideHeading>Scientific analyses on the web</SlideHeading>
        <SlideCaption>
          Use django-twined to integrate analysis services with a django-based
          webserver.
        </SlideCaption>
        <Box mt={1} ml={2} mb={2}>
          <ArrowBullet>
            Wrap your code as data services, then provide them to third parties
          </ArrowBullet>
          <ArrowBullet>
            Your client can ask questions in an easy to understand pattern
          </ArrowBullet>
          <ArrowBullet>
            Forward logs and live monitors straight through to the client
          </ArrowBullet>
          <ArrowBullet>
            Add fine-level access controls or a paymet gateway
          </ArrowBullet>
        </Box>
        <DatoCmsCtaLink
          display="flex"
          justifyContent="flex-end"
          url="https://github.com/octue/django-twined"
          text="See the django plugin"
        ></DatoCmsCtaLink>
      </Box>
    </Box>
  )
}

const CppChartsSlide = () => {
  const classes = useStyles()
  return (
    <Box display="flex" justifyContent="center" mb={3}>
      <Box maxWidth={750}>
        <SlideHeading>C++ User? Get beautiful charting...</SlideHeading>
        <SlideCaption>
          Used by leading organisations all over the world, our C++ charting
          library integrates with plotly to produces absolutely beautiful
          web-renderable charts
        </SlideCaption>
        <Box mt={1} ml={2} mb={2}>
          <ArrowBullet>
            Fast and async write of chart data to JSON files or a pipe
          </ArrowBullet>
          <ArrowBullet>
            Plotly-based web viewer for fully manipulable charts, in browser
          </ArrowBullet>
          <ArrowBullet>
            Integrates with std::vector and the eigen linear algebra library
          </ArrowBullet>
        </Box>
        <DatoCmsCtaLink
          display="flex"
          justifyContent="flex-end"
          url="https://cpplot.readthedocs.io/en/latest/"
          text="See the django plugin"
        ></DatoCmsCtaLink>
      </Box>
    </Box>
  )
}

const UnifyYourGitSlide = () => {
  const classes = useStyles()
  return (
    <Box display="flex" justifyContent="center" mb={3}>
      <Box maxWidth={750}>
        <SlideHeading>Unify your Git workflow</SlideHeading>
        <SlideCaption>
          Built for our own QA purposes, we open-sourced our Conventional Commit
          hooks so you can use them too!
        </SlideCaption>
        <Box mt={1} ml={2} mb={2}>
          <ArrowBullet>Make release notes automatically</ArrowBullet>
          <ArrowBullet>
            Ensure clear and consistent commits across a team
          </ArrowBullet>
          <ArrowBullet>
            Automatically calculate Semantic Versioning when you change your
            code
          </ArrowBullet>
          <ArrowBullet>Automatically update Pull Requests</ArrowBullet>
        </Box>
        {/* <Box> */}
        <DatoCmsCtaLink
          display="flex"
          justifyContent="flex-end"
          url="https://github.com/octue/conventional-commits"
          text="Turbocharge your Git workflow"
        ></DatoCmsCtaLink>
        {/* </Box> */}
      </Box>
    </Box>
  )
}

const AutomateThoseReportsSlide = () => {
  const classes = useStyles()
  return (
    <Box display="flex" justifyContent="center" mb={3}>
      <Box maxWidth={750}>
        <SlideHeading>Automate those reports...</SlideHeading>
        <SlideCaption>
          We took over a dead OSS project and brought it up to scratch - now you
          can use it to build complex, automated and data driven reports!
        </SlideCaption>
        <Box mt={1} ml={2} mb={2}>
          <ArrowBullet>
            Embed live scientific charts using sphinx-charts
          </ArrowBullet>
          <ArrowBullet>
            Create reports and documentation programatically from python
          </ArrowBullet>
          <ArrowBullet>
            Render to HTML, PDF or a wide variety of other targets
          </ArrowBullet>
        </Box>
        {/* <Box> */}
        <DatoCmsCtaLink
          display="flex"
          justifyContent="flex-end"
          url="https://rstcloth.readthedocs.io/en/latest/"
          text="Check out rstcloth"
        ></DatoCmsCtaLink>
        {/* </Box> */}
      </Box>
    </Box>
  )
}

const EverythingIsOpenSlide = () => {
  const classes = useStyles()
  return (
    <Box display="flex" justifyContent="center" mb={3}>
      <Box maxWidth={750}>
        <SlideHeading>Everything is open</SlideHeading>
        <SlideCaption>
          Even this website!! We open-sourced this site as a learning resource
          for frontend developers.
        </SlideCaption>
        <Box mt={1} ml={2} mb={2}>
          <ArrowBullet>Latest standards in React + Javascript</ArrowBullet>
          <ArrowBullet>
            Uses Gatsby for lightning-fast page loads and QA metrics
          </ArrowBullet>
          <ArrowBullet>Form management with react-query</ArrowBullet>
          <ArrowBullet>Integrated CMS for media management</ArrowBullet>
        </Box>
        <DatoCmsCtaLink
          display="flex"
          justifyContent="flex-end"
          url="https://github.com/octue/planex-site"
          text="See the guts"
        ></DatoCmsCtaLink>
      </Box>
    </Box>
  )
}

const ToolShowcase = ({ ...rest }) => {
  return (
    <SectionContainer {...rest}>
      <Box display="flex" justifyContent="center" mb={3}>
        <SectionHeading>Dozens of open-source tools...</SectionHeading>
      </Box>
      <Slider {...SLIDER_SETTINGS}>
        <SchemaAsStrandsSlide />
        <DatasetsSdkSlide />
        <WrapYourCodeSlide />
        <CloudStoreMeetPostgresSlide />
        <ProvideDataServicesSlide />
        <UnifyYourGitSlide />
        <AutomateThoseReportsSlide />
        <CppChartsSlide />
        <EverythingIsOpenSlide />
      </Slider>
    </SectionContainer>
  )
}

export default ToolShowcase
