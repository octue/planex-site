import React from 'react'

import { SubscribeForm as SubscribeFormComponent } from '../../components/forms'
import FormHandler from './FormHandler'

/**
 * A container that controls submission of the subscribe form then executes supplied onSuccess() or onFailure() handlers
 * successful submission
 * @returns {JSX.Element}
 * @constructor
 */
export default function SubscribeForm({ onSuccess, onFailure }) {
  const handleSuccess = () => {
    onSuccess && onSuccess()
  }

  const handleFailure = () => {
    onFailure && onFailure()
  }

  return (
    <FormHandler
      FormComponent={SubscribeFormComponent}
      endpoint="/subscribe"
      onSuccess={handleSuccess}
      onFailure={handleFailure}
    />
  )
}
