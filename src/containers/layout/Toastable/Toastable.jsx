import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { navigate } from 'gatsby'
import * as queryString from 'query-string'
import { SnackbarProvider, useSnackbar } from 'notistack'
import { toastMessages } from '../../../../toasts'

/**
 * Allows toasts to be displayed on page load, if the page query parameters include eg
 * ?toasts=contact-success,contact-failure
 *
 */
function BaseToastable({ location, children }) {
  const { enqueueSnackbar } = useSnackbar()
  const { search, pathname } = location || {}
  useEffect(() => {
    if (search) {
      const { toasts, ...otherQueries } = queryString.parse(search)
      const toastKeys = toasts ? toasts.split(',') : []
      toastKeys.map((toastKey) => {
        if (toastMessages[toastKey]) {
          enqueueSnackbar(...toastMessages[toastKey])
        } else {
          console.error(`Toast key "${toastKey}" not available in toasts.js.`)
        }
      })
      navigate(
        queryString.stringifyUrl({
          url: pathname,
          query: otherQueries,
        })
      )
    }
  }, [search, pathname])

  return <>{children}</>
}

function Toastable({ children, location }) {
  return (
    <SnackbarProvider maxSnack={3}>
      <BaseToastable location={location}>{children}</BaseToastable>
    </SnackbarProvider>
  )
}

Toastable.defaultProps = {}

Toastable.propTypes = {
  /**
   * Children should be the actual contents of the page
   */
  children: PropTypes.node,
  /**
   * The location object supplied to a page by the gatsby router
   */
  location: PropTypes.object,
}

export default Toastable
