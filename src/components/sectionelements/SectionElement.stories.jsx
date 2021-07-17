import React from 'react'
import SectionHeading from './SectionHeading'
import SectionDetail from './SectionDetail'
import HexagonSection from './sectionwithhexagon/HexagonSection'
import SvgHexagonSection from './singlehexagonsection/SvgHexagonSection'
import BackgroundImg from './BackgroundImg'
import HeroSection from './herosection/HeroSection'
import HelpSection from './helpsection/HelpSection'
import JoinSection from './joinsection/JoinSection'

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
        heading="You don't need to be a materials scientist to build a LEGO® model.
"
        description="So why should someone modelling climate or energy systems need to be an expert coder? Yet scientists waste 95% of their day [Source:McKinsey] being general programmers, API architects and DevOps engineers. Our solution: a framework of open-source tools to create, connect, exchange and reuse analysis building blocks.
"
        button="click me"
      />
    </>
  )
}

export const HexagonWithSection = () => {
  return (
    <>
      <HexagonSection />
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

// export const HeroSectionWithImage = () => {
//   return (
//     <>
//       <HeroSection />
//     </>
//   )
// }
