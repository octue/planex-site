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

/* Wraps stories in a location provider, to enable components to use the
 * useLocation() hook (which is useful in Gatsby to determine the page location)
 */
export const withFonts = makeDecorator({
  name: 'withFonts',
  parameterName: 'fontsAdded',
  wrapper: Wrapper,
})

export default withFonts
