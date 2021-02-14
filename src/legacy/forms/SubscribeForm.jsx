import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import InputAdornment from '@material-ui/core/InputAdornment'
import { Form } from 'formik'
import EmailIcon from '@material-ui/icons/Email'

// import Button from 'components/site/CustomButtons/Button.jsx'
import CustomInput from 'components/site/CustomInput/CustomInput.jsx'
import GridContainer from 'components/common/Grid/GridContainer.jsx'
import GridItem from 'components/common/Grid/GridItem.jsx'

import Button from '@material-ui/core/Button'
import registerPageStyle from 'assets/jss/material-octue/views/registerPageStyle.jsx'

class SubscribeForm extends React.Component {
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
        <GridContainer
          direction="row"
          justify="space-evenly"
          alignItems="center"
        >
          <GridItem xs={8}>
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
                disabled: submitting,
                value: values.email,
                name: 'email',
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon className={classes.icon} />
                  </InputAdornment>
                ),
              }}
            />
          </GridItem>
          <GridItem>
            <Button
              variant="contained"
              color="secondary"
              type="submit"
              disabled={submitting}
            >
              Subscribe
            </Button>
          </GridItem>
        </GridContainer>
      </Form>
    )
  }
}

SubscribeForm.propTypes = {
  classes: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
}

export default withStyles(registerPageStyle)(SubscribeForm)
