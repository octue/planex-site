import React from 'react'
import JoinTheMovement from './JoinTheMovement'

import { graphql, useStaticQuery } from 'gatsby'

export default {
  title: 'Sections/JoinTheMovement',
  component: JoinTheMovement,
}

const Template = ({ ...args }) => {
  // const data = useStaticQuery(
  //   graphql`
  //     query {
  //       desktop: file(relativePath: { eq: "backgrounds/tinted-hex.jpg" }) {
  //         childImageSharp {
  //           fluid(quality: 90, maxWidth: 100) {
  //             ...GatsbyImageSharpFluid_withWebp
  //           }
  //         }
  //       }
  //     }
  //   `
  // )

  // const imageData = data.desktop.childImageSharp.fluid

  return <JoinTheMovement />
}

export const Basic = Template.bind({})
Basic.args = {}
