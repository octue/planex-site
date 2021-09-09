import React, { useState } from 'react'
import CallToAction from '../../components/elements/CallToAction'
import Button from '@material-ui/core/Button'
import EmailIcon from '@material-ui/icons/Email'
import SubscribeForm from '../forms/SubscribeForm'

const DatoCmsCtaSubscribe = ({ id, text, ...rest }) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <CallToAction
        open={open}
        onClose={() => {
          setOpen(false)
        }}
        FormComponent={SubscribeForm}
      />
      <Button
        variant="contained"
        size="large"
        color="primary"
        onClick={() => {
          setOpen(true)
        }}
        endIcon={<EmailIcon />}
      >
        {text}
      </Button>
    </>
  )
}

export default DatoCmsCtaSubscribe
