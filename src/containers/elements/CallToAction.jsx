import React from 'react'
import { createState, useState } from '@hookstate/core'
import { CallToAction as CallToActionComponent } from '../../components/elements'

const ctaState = createState(false)

export const setCtaOpen = () => {
  ctaState.set(true)
}
export const setCtaClosed = () => {
  ctaState.set(false)
}

const CallToAction = (props) => {
  const state = useState(ctaState)
  const open = state.get()
  return <CallToActionComponent open={open} onClose={setCtaClosed} {...props} />
}

CallToAction.defaultProps = CallToActionComponent.defaultProps

CallToAction.propTypes = CallToActionComponent.propTypes

export default CallToAction
