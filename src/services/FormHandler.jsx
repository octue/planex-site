import React from 'react'
import PropTypes from 'prop-types'
import useAxios, { configure } from 'axios-hooks'
import Axios from 'axios'

// Configure an axios instance to submit form data
// N.B. For creating form component storybooks, use this as the axios instance
export const axios = Axios.create({
  baseURL: 'https://europe-west1-planex.cloudfunctions.net',
})

configure({ axios })

/**
 * A Form Handler service that renders a react component containing a form, handling submission to the
 * Google Cloud Functions endpoint.
 *
 * This handler could be implemented many ways... e.g. as a HOC or even rewritten as a hook 'useFormHandler' to provide
 * `[handleSubmit, apiErrors, submitting]` Directly in the form component.
 *
 * I've chosen to do it as a component for... no real reason, other than "having a parent/container component
 * taking care of data fetching/updating" is a pretty common pattern in react.
 *
 */
function FormHandler({ FormComponent, endpoint, ...rest }) {
  const [{ data, loading, error, response }, execute] = useAxios(
    {
      url: `https://europe-west1-planex.cloudfunctions.net${endpoint}`,
      method: 'POST',
    },
    { manual: true } // Prevents request on initial render
  )
  console.log('FORMHANDLER:', data, loading, error, response)

  function handleSubmit(data) {
    execute({ data })
  }

  console.log('THIS IS ALWAYS UNDEFINED IF THERE IS AN ERROR', response?.data)
  const apiErrors = error ? { ...response.data } : {}
  return (
    <FormComponent
      {...rest}
      submitting={loading}
      apiErrors={apiErrors}
      onSubmit={handleSubmit}
    />
  )
}

FormHandler.defaultProps = {
  endpoint: '/contact',
}

FormHandler.propTypes = {
  /**
   * The endpoint to POST the form data to, eg '/contact'
   */
  endpoint: PropTypes.oneOf(['/contact', '/subscribe']).isRequired,
  /**
   * The form component to be rendered within the handler
   */
  FormComponent: PropTypes.object.isRequired,
}

export default FormHandler
