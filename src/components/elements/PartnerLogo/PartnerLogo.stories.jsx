import React from 'react'
import PartnerLogo from './PartnerLogo'
import AerosenseWhite from '../../../assets/images/logos/partners/aerosense-white.svg'

export default {
  title: 'Elements/PartnerLogo',
  component: PartnerLogo,
}
const Template = () => {
  return (
    <>
      <PartnerLogo partnersvg={AerosenseWhite} />
    </>
  )
}

export const Basic = Template.bind({})
Basic.args = {}
