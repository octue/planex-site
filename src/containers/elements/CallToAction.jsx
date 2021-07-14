import React from 'react'
import { createState, useState } from '@hookstate/core'
import { CallToAction as CallToActionComponent } from '../../components/elements'
import { toastMessages } from '../../../toasts'
import SubscribeForm from '../forms/SubscribeForm'
import { useSnackbar } from 'notistack'

const ctaState = createState(false)

export const setCtaOpen = () => {
  ctaState.set(true)
}
export const setCtaClosed = () => {
  ctaState.set(false)
}

const CallToAction = (props) => {
  const { enqueueSnackbar } = useSnackbar()
  const state = useState(ctaState)
  const open = state.get()

  const handleSuccess = () => {
    setCtaClosed()
    enqueueSnackbar(...toastMessages['subscribe-success'])
  }
  const handleFailure = () => {
    enqueueSnackbar(...toastMessages['subscribe-failure'])
  }
  return (
    <CallToActionComponent
      open={open}
      onClose={setCtaClosed}
      onSuccess={handleSuccess}
      onFailure={handleFailure}
      FormComponent={SubscribeForm}
    />
  )
}

// CallToAction.defaultProps = CallToActionComponent.defaultProps
//
// CallToAction.propTypes = CallToActionComponent.propTypes

export default CallToAction
