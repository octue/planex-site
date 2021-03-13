import React from 'react'
import { navigate } from 'gatsby'
import { useSnackbar } from 'notistack'

import { ContactForm as ContactFormComponent } from '../../components/forms'
import { FormHandler } from '../../services'

/**
 * A contact form container that controls submission of the contact form, displays toasts and navigates to '/' on
 * successful submission
 * @returns {JSX.Element}
 * @constructor
 */
export default function ContactForm() {
  const { enqueueSnackbar } = useSnackbar()

  const handleSuccess = () => {
    enqueueSnackbar("Thanks, we'll get back to you soon!", {
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'right',
      },
      variant: 'success',
    })
    navigate(`/`)
  }

  const handleFailure = () => {
    enqueueSnackbar('Something went wrong processing your form', {
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'right',
      },
      variant: 'error',
    })
  }

  return (
    <FormHandler
      FormComponent={ContactFormComponent}
      endpoint="/contact"
      onSuccess={handleSuccess}
      onFailure={handleFailure}
    />
  )
}
