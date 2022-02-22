import * as React from 'react'
// import { graphql, useStaticQuery } from 'gatsby'

export const StaticDataContext = React.createContext()

/* A provider of static data (i.e. data fetched at build time)
 * to allow client-only routes to use static queries.
 * This provider allows nested components to set the data
 * (per the pattern in https://reactjs.org/docs/context.html#updating-context-from-a-nested-component)
 * so that queries for pages can be done as normal then the results simply injected
 * into this provider.
 */
const StaticDataProvider = ({ children }) => {
  const [_data, _setData] = React.useState()
  const value = React.useMemo(
    () => ({
      staticData: _data,
      setStaticData: (value) => {
        _setData(value)
      },
    }),
    [_data, _setData]
  )
  return (
    <StaticDataContext.Provider value={value}>
      {children}
    </StaticDataContext.Provider>
  )
}

export default StaticDataProvider
