import React, { useState } from 'react'
import CallToAction from './CallToAction'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import { WithAxiosMock as SubscribeForm } from '../../forms/SubscribeForm/SubscribeForm.stories'

export default {
  title: 'Elements/CallToAction',
  component: CallToAction,
}

export const Basic = (args) => {
  const [open, setOpen] = useState(true)

  return (
    <>
      <CallToAction
        {...args}
        open={open}
        onClose={() => {
          setOpen(false)
        }}
        FormComponent={SubscribeForm}
      />
      <Box m={6}>
        <Button
          variant="contained"
          onClick={() => {
            setOpen(true)
          }}
        >
          Open the CTA Dialog
        </Button>
      </Box>
    </>
  )
}
Basic.args = {}
