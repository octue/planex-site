import React from 'react'
import { ThemeProvider } from '@material-ui/styles'
import { BasicPage, CallToAction } from '../containers'
import { darkTheme } from '../themes'
import HeroSection from '../components/sectionelements/herosection/HeroSection'
import { graphql, useStaticQuery } from 'gatsby'
import JoinSection from '../components/sectionelements/joinsection/JoinSection'
import AboutHexagonSection from '../components/sectionelements/sectionwithhexagon/AboutHexagonSection'
import AboutSvgHexagonSection from '../components/sectionelements/singlehexagonsection/AboutSvgHexagonSection'
import OurTeamSection from '../components/sectionelements/teamsection/OurTeamSection'
import SEO from '../components/core/SEO'

const About = ({ location }) => {
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "backgrounds/about.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  const imageData = data.desktop.childImageSharp.fluid
  const navBarProps = {
    transparency: true,
  }
  const footerProps = {
    kind: 'big',
  }

  return (
    <BasicPage
      location={location}
      navBarProps={navBarProps}
      footerProps={footerProps}
    >
      <SEO pageMeta={{ title: 'Page two' }} />
      <CallToAction />
      <ThemeProvider theme={darkTheme}>
        {/* <Hero /> */}
        <HeroSection
          heading={'The climate can’t wait.'}
          description={`That's why we're a non-profit.`}
          Image={imageData}
        />
      </ThemeProvider>
      <AboutHexagonSection />
      <AboutSvgHexagonSection />
      <OurTeamSection />
      <JoinSection
        description={
          'Octue is a non-profit organisation working to free scientists from their daily data drudgery. Here are the latest supporters contributing to our codebase.'
        }
      />
    </BasicPage>
  )
}

export default About
