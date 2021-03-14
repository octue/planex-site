import React, { useEffect } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import LinearProgress from '@material-ui/core/LinearProgress'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import * as Yup from 'yup'
import EmailIcon from '@material-ui/icons/Email'

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Must be a valid email address'),
})

const useStyles = makeStyles((theme) => ({
  box: {
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  button: {
    marginTop: `16px`,
    width: '100%',
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

  useEffect(() => {
    clearErrors()
    Object.keys(apiErrors).map((key) => {
      setError(key, {
        type: 'api',
        message: apiErrors[key],
      })
    })
  }, [clearErrors, setError, apiErrors])

  const helperText = {
    nonFieldErrors: errors.nonFieldErrors?.message || null,
    email:
      errors.email?.message ||
      "We promise we won't bug you, or sell your data to third parties",
  }

  const hasError = {
    nonFieldErrors: !!errors?.nonFieldErrors,
    email: !!errors?.email,
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box width="100%" mb={submitting ? 0 : 0.5}>
        {submitting && (
          <LinearProgress color="primary" className={classes.progress} />
        )}
        {hasError['nonFieldErrors'] && (
          <Typography color="error" variant="subtitle2">
            {helperText.nonFieldErrors}
          </Typography>
        )}
      </Box>
      <TextField
        defaultValue=""
        disabled={submitting}
        error={hasError['email']}
        fullWidth
        helperText={helperText['email']}
        id="email"
        inputRef={register}
        label="Email *"
        margin="normal"
        name="email"
        variant="outlined"
      />
      <Button
        className={classes.button}
        variant="contained"
        fullwidth
        disabled={submitting}
        endIcon={<EmailIcon />}
        color="primary"
        size="large"
        type="submit"
      >
        Subscribe
      </Button>
    </form>
  )
}
