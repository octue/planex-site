import React from 'react'
import SectionGrid from './SectionGrid'

export default {
  title: 'Elements/SectionGrid',
  component: SectionGrid,
}

export const ThreeItems = () => {
  return (
    <SectionGrid
      xs={12}
      sm={6}
      md={4}
      centerItems
      heading="The Heading"
      after={<p>a component after the container</p>}
      before={<p>a component before the container</p>}
    >
      <p>first thing</p>
      <p>second thing</p>
      <p>third thing</p>
    </SectionGrid>
  )
}

export const FiveItems = () => {
  return (
    <SectionGrid xs={12} sm={6} md={4} centerItems heading="The Heading">
      <p>first thing</p>
      <p>second thing</p>
      <p>third thing</p>
      <p>quaternion</p>
      <p>pentagram</p>
    </SectionGrid>
  )
}

export const Uncentred = () => {
  return (
    <SectionGrid
      xs={12}
      sm={6}
      md={4}
      heading="The Heading"
      after={<p>a component after the container</p>}
      before={<p>a component before the container</p>}
    >
      <p>first thing</p>
      <p>second thing</p>
      <p>third thing</p>
    </SectionGrid>
  )
}
