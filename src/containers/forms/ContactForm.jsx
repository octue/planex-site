import React from 'react'
import { navigate } from 'gatsby'

import { ContactForm as ContactFormComponent } from '../../components/forms'
import FormHandler from './FormHandler'

/**
 * A contact form container that controls submission of the contact form, displays toasts and navigates to '/' on
 * successful submission
 * @returns {JSX.Element}
 * @constructor
 */
export default function ContactForm() {
  const handleSuccess = () => {
    navigate(`/?toasts=contact-success`)
  }

  const handleFailure = () => {
    navigate(`/contact?toasts=contact-failure`)
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
