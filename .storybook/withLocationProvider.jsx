import React from 'react'
import { makeDecorator } from '@storybook/addons'
import { LocationProvider } from '@gatsbyjs/reach-router'

const Wrapper = (storyFn, context) => {
  return (
      <LocationProvider>
        {storyFn(context)}
      </LocationProvider>
    )
}

/* Wraps stories in a location provider, to enable components to use the
 * useLocation() hook (which is useful in Gatsby to determine the page location)
 */
export const withLocationProvider = makeDecorator({
  name: 'withLocationProvider',
  parameterName: 'locationProvider',
  wrapper: Wrapper,
})

export default withLocationProvider
