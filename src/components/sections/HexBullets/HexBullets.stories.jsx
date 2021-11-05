import React from 'react'
import HexBullets from './HexBullets'

import { hexBullets as hexBulletsFixture } from '../../../fixtures/sections/hexBullets'

export default {
  title: 'Sections/HexBullets',
  component: HexBullets,
}

const Template = (args) => <HexBullets {...args} />

export const Basic = Template.bind({})
Basic.args = {
  ...hexBulletsFixture,
}
