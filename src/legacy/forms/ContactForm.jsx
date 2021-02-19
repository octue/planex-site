import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import { Form } from 'formik'
import CustomInput from 'components/site/CustomInput/CustomInput.jsx'
import GridContainer from 'components/common/Grid/GridContainer.jsx'
import GridItem from 'components/common/Grid/GridItem.jsx'

import Button from '@material-ui/core/Button'
import registerPageStyle from 'assets/jss/material-octue/views/registerPageStyle.jsx'

class ContactForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showPassword: false,
    }
    this.handleClickShowPassword = this.handleClickShowPassword.bind(this)
    this.handleMouseDownPassword = this.handleMouseDownPassword.bind(this)
  }

  handleClickShowPassword() {
    this.setState((prevState) => ({ showPassword: !prevState.showPassword }))
  }

  // eslint-disable-next-line class-methods-use-this
  handleMouseDownPassword(event) {
    event.preventDefault()
  }

  render() {
    const {
      classes,
      values,
      errors,
      touched,
      handleChange,
      handleBlur,
      handleSubmit,
      submitting,
    } = this.props

    return (
      <Form onSubmit={handleSubmit}>
        <GridContainer>
          <GridItem xs={12} sm={6}>
            <CustomInput
              labelText="First Name"
              id="firstName"
              formControlProps={{
                fullWidth: true,
                className: classes.formControl,
              }}
              error={errors.firstName ? touched.firstName : false}
              helperText={touched.firstName ? errors.firstName : undefined}
              inputProps={{
                autoComplete: 'fname',
                variant: 'outlined',
                required: true,
                onChange: handleChange,
                onBlur: handleBlur,
                value: values.firstName,
                name: 'firstName',
              }}
            />
          </GridItem>
          <GridItem xs={12} sm={6}>
            <CustomInput
              labelText="Last Name"
              id="lastName"
              formControlProps={{
                fullWidth: true,
                className: classes.formControl,
              }}
              error={errors.lastName ? touched.lastName : false}
              helperText={touched.lastName ? errors.lastName : undefined}
              inputProps={{
                autoComplete: 'lname',
                variant: 'outlined',
                required: true,
                onChange: handleChange,
                onBlur: handleBlur,
                value: values.lastName,
                name: 'lastName',
              }}
            />
          </GridItem>
          <GridItem xs={12}>
            <CustomInput
              labelText="Email"
              id="email"
              formControlProps={{
                fullWidth: true,
                className: classes.formControl,
              }}
              error={errors.email ? touched.email : false}
              helperText={touched.email ? errors.email : undefined}
              inputProps={{
                autoComplete: 'email',
                variant: 'outlined',
                required: true,
                onChange: handleChange,
                onBlur: handleBlur,
                value: values.email,
                name: 'email',
              }}
            />
          </GridItem>
          <GridItem xs={12}>
            <CustomInput
              labelText="Your Message"
              id="message"
              name="message"
              formControlProps={{
                fullWidth: true,
                className: classes.formControl,
              }}
              error={errors.message ? touched.message : false}
              helperText={touched.message ? errors.message : undefined}
              inputProps={{
                variant: 'outlined',
                required: true,
                onChange: handleChange,
                onBlur: handleBlur,
                value: values.message,
                name: 'message',
                multiline: true,
                rows: 6,
              }}
            />
          </GridItem>
        </GridContainer>
        <GridContainer justify="center">
          {/*  <GridItem xs={12} sm={8}> */}
          <Button
            variant="contained"
            color="secondary"
            type="submit"
            disabled={submitting}
          >
            Send message
          </Button>
          {/*  </GridItem> */}
        </GridContainer>
      </Form>
    )
  }
}

ContactForm.propTypes = {
  classes: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
}

export default withStyles(registerPageStyle)(ContactForm)
