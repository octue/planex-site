import React from 'react'
import SectionHeading from './SectionHeading'
import SectionDetail from './SectionDetail'
import MianPageHexagonSection from './sectionwithhexagon/MianPageHexagonSection'
import SvgHexagonSection from './singlehexagonsection/SvgHexagonSection'
import HelpSection from './helpsection/HelpSection'
import JoinSection from './joinsection/JoinSection'
import PartnerLogo from './PartnerLogo'
import AerosenseWhite from '../../assets/images/logos/partners/aerosense-white.svg'
import PartnerSection from './partnersection/PartnerSection'
import ArticlesCard from './ArticlesCard'

export default {
  title: 'SectionElements',
  component: SectionHeading,
}
const Template = ({ ...args }) => {
  return (
    <>
      <SectionHeading />
    </>
  )
}

export const sectionHeading = Template.bind({})
sectionHeading.args = {}

export const SectionWithDetail = () => {
  return (
    <>
      <SectionDetail
        heading="You don't need to be a materials scientist to build a LEGO® model."
        description="So why should someone modelling climate or energy systems need to be an expert coder? Yet scientists waste 95% of their day [Source:McKinsey] being general programmers, API architects and DevOps engineers. Our solution: a framework of open-source tools to create, connect, exchange and reuse analysis building blocks."
        button="click me"
      />
    </>
  )
}

export const HexagonWithSection = () => {
  return (
    <>
      <MianPageHexagonSection />
    </>
  )
}

export const MultipleSvgHexagonSection = () => {
  return (
    <>
      <SvgHexagonSection />
    </>
  )
}

export const HelpSectionHexagon = () => {
  return (
    <>
      <HelpSection />
    </>
  )
}
export const JoinSectionHexagon = () => {
  return (
    <>
      <JoinSection />
    </>
  )
}

export const PartnerWithLogo = () => {
  return (
    <>
      <PartnerLogo partnersvg={AerosenseWhite} />
    </>
  )
}
export const PartnerWithSection = () => {
  return (
    <>
      <PartnerSection />
    </>
  )
}

export const ArticlesCardDetail = () => {
  return (
    <>
      <ArticlesCard />
    </>
  )
}

// export const HeroSectionWithImage = () => {
//   return (
//     <>
//       <HeroSection />
//     </>
//   )
// }
