import React from 'react'
import { navigate } from 'gatsby'

import { SnackbarProvider, useSnackbar } from 'notistack'
import { SubscribeForm as SubscribeFormComponent } from '../../components/forms'
import FormHandler from './FormHandler'
import { toastMessages } from '../../../toasts'

/**
 * A container that controls submission of the subscribe form then executes supplied onSuccess() or onFailure() handlers
 * successful submission
 * @returns {JSX.Element}
 * @constructor
 */
export default function SubscribeForm({ onClose }) {
  const { enqueueSnackbar } = useSnackbar()
  const handleSuccess = () => {
    enqueueSnackbar(...toastMessages['subscribe-success'])
    onClose && onClose()
  }

  const handleFailure = () => {
    // Inline form validation should show errors
    // enqueueSnackbar(...toastMessages['subscribe-failure'])
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
