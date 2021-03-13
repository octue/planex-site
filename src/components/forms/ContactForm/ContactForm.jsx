import React, { useEffect } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import LinearProgress from '@material-ui/core/LinearProgress'
import Button from '@material-ui/core/Button'
import SendIcon from '@material-ui/icons/Send'
import Box from '@material-ui/core/Box'
import * as Yup from 'yup'

const schema = Yup.object().shape({
  message: Yup.string()
    .required('Please tell us how we can help you...')
    .max(2000, 'Must be less than 2000 characters'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Must be a valid email address'),
  firstName: Yup.string().required('Please add your first name'),
  lastName: Yup.string().required('Please add your last name'),
})

const useStyles = makeStyles((theme) => ({
  button: {
    marginTop: theme.spacing(2),
  },
  progressSpacer: {
    paddingTop: theme.spacing(1.5),
  },
  progress: {
    height: theme.spacing(0.5),
    marginBottom: `${theme.spacing(1)}px`,
  },
}))

export default ({ onSubmit, apiErrors, submitting }) => {
  const { register, handleSubmit, setError, clearErrors, errors } = useForm({
    resolver: yupResolver(schema),
  })

  const classes = useStyles()

  // Clear the form error state then set any errors from the API on the form state
  useEffect(() => {
    clearErrors()
    Object.keys(apiErrors).map((key) => {
      setError(key, {
        type: 'api',
        message: apiErrors[key],
      })
    })
  }, [clearErrors, setError, apiErrors])

  // Instead of 'null' you could provide default help text here
  const helperText = {
    nonFieldErrors: errors.nonFieldErrors?.message || null,
    firstName: errors.firstName?.message || null,
    lastName: errors.lastName?.message || null,
    email: errors.email?.message || null,
    message: errors.message?.message || null,
  }

  // Booleans for whether an error state occurs are useful for MUI
  const hasError = {
    nonFieldErrors: !!errors?.nonFieldErrors,
    firstName: !!errors?.firstName,
    lastName: !!errors?.lastName,
    email: !!errors?.email,
    message: !!errors?.message,
  }

  // Because it's bad UX to have the form jittering around
  const containerClass = submitting ? '' : classes.progressSpacer
  return (
    <Container size="sm" className={containerClass}>
      {submitting && (
        <LinearProgress color="primary" className={classes.progress} />
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          // autoFocus - jsx-a11y says this hurts usability and accessibility
          defaultValue=""
          disabled={submitting}
          error={hasError['firstName']}
          fullWidth
          helperText={helperText['firstName']}
          id="firstName"
          inputRef={register}
          // Note - use the * in the label rather than the `required` prop to stop browser validation from kicking in, in favour of our formatted validation
          label="First Name *"
          margin="normal"
          name="firstName"
          variant="outlined"
        />
        <TextField
          defaultValue=""
          disabled={submitting}
          error={hasError['lastName']}
          fullWidth
          helperText={helperText['lastName']}
          id="lastName"
          inputRef={register}
          // Note - use the * in the label rather than the `required` prop to stop browser validation from kicking in, in favour of our formatted validation
          label="Last Name *"
          margin="normal"
          name="lastName"
          variant="outlined"
        />
        <TextField
          defaultValue=""
          disabled={submitting}
          error={hasError['email']}
          fullWidth
          helperText={helperText['email']}
          id="email"
          inputRef={register}
          // Note - use the * in the label rather than the `required` prop to stop browser validation from kicking in, in favour of our formatted validation
          label="Email *"
          margin="normal"
          name="email"
          variant="outlined"
        />
        <TextField
          defaultValue=""
          disabled={submitting}
          error={hasError['message']}
          fullWidth
          helperText={helperText['message']}
          id="message"
          inputRef={register}
          // Note - use the * in the label rather than the `required` prop to stop browser validation from kicking in, in favour of our formatted validation
          label="Message *"
          margin="normal"
          multiline
          name="message"
          rows={6}
          variant="outlined"
        />
        <Typography color="error" variant="subtitle2">
          {helperText.nonFieldErrors}
        </Typography>
        <Box
          width="100%"
          display="flex"
          flexDirection="row"
          justifyContent="flex-end"
        >
          <Button
            className={classes.button}
            variant="contained"
            disabled={submitting}
            // TODO next version of MUI has a <LoadingButton> in the lab which will add a spinner and disable this nicely
            // pending={submitting}
            // pendingPosition="start"
            endIcon={<SendIcon />}
            color="primary"
            size="large"
            type="submit"
          >
            Send Message
          </Button>
        </Box>
      </form>
    </Container>
  )
}
