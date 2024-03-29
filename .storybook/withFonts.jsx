import React from 'react'
import { makeDecorator } from '@storybook/addons'
import Fonts from '../src/components/core/Fonts'

const Wrapper = (storyFn, context) => {
  return (
      <Fonts>
        {storyFn(context)}
      </Fonts>
    )
}

export const withFonts = makeDecorator({
  name: 'withFonts',
  parameterName: 'fontsAdded',
  wrapper: Wrapper,
})

export default withFonts
