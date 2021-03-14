import React from 'react'
import PropTypes from 'prop-types'
import { axios } from '../../axios'

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
function FormHandler({ FormComponent, onSuccess, endpoint, ...rest }) {
  const [submitting, setSubmitting] = React.useState(false)
  const [apiErrors, setApiErrors] = React.useState({})

  const handleSubmit = React.useCallback(
    async (data) => {
      setSubmitting(true)
      axios({
        url: `https://europe-west1-planex.cloudfunctions.net${endpoint}`,
        method: 'POST',
        data,
      })
        .catch((error) => {
          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            setApiErrors(error.response.data)
          } else if (error.request) {
            console.error(
              'Error - request was made but no response received',
              error
            )
            setApiErrors({
              nonFieldErrors:
                'No response from server... check your internet connection',
            })
          } else {
            console.error(
              'Error - something happened in setting up the request',
              error
            )
            setApiErrors({
              nonFieldErrors: 'An unknown error occurred.',
            })
          }
        })
        .then((response) => {
          setSubmitting(false)
          if (response) {
            // Form submission was successful
            setApiErrors({})
            onSuccess(response.data)
          }
        })
    },
    [endpoint, onSuccess]
  )
  return (
    <FormComponent
      {...rest}
      submitting={submitting}
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
  FormComponent: PropTypes.oneOfType([PropTypes.object, PropTypes.func])
    .isRequired,
  /**
   * The callback executed when the form has successfully been submitted
   */
  onSuccess: PropTypes.func.isRequired,
}

export default FormHandler
