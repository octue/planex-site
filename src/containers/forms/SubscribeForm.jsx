import React from 'react'
import { useSnackbar } from 'notistack'

import { SubscribeForm as SubscribeFormComponent } from '../../components/forms'
import { FormHandler } from '../../services'

/**
 * A container that controls submission of the subscribe form displays toasts then optionally executes supplied onSuccess() or onFailure() handlers
 * successful submission
 * @returns {JSX.Element}
 * @constructor
 */
export default function SubscribeForm({ onSuccess, onFailure }) {
  const { enqueueSnackbar } = useSnackbar()

  const handleSuccess = () => {
    enqueueSnackbar("Thanks, you'll be hearing from us!", {
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'right',
      },
      variant: 'success',
    })
    onSuccess && onSuccess()
  }

  const handleFailure = () => {
    enqueueSnackbar('Something went wrong while subscribing you', {
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'right',
      },
      variant: 'error',
    })
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
