import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import EmailIcon from '@material-ui/icons/Email'
import Box from '@material-ui/core/Box'
import CallToAction from '../../components/elements/CallToAction'
import SubscribeForm from '../forms/SubscribeForm'

const DatoCmsCtaSubscribe = ({ id, text, ...rest }) => {
  const [open, setOpen] = useState(false)

  return (
    <Box width="100%">
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
    </Box>
  )
}

export default DatoCmsCtaSubscribe
