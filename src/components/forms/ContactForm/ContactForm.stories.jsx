import React from 'react'
import ContactForm from './ContactForm'
import AxiosMock, { mockError } from '../../../../.storybook/AxiosMock'
import FormHandler from '../../../containers/forms/FormHandler'

export default {
  title: 'Forms/Contact',
  component: ContactForm,
  parameters: { actions: { argTypesRegex: '^on.*' } },
}

const Template = (args) => {
  const handleSubmit = (data) => {
    console.log('onSubmit data:', data)
  }
  return <ContactForm {...args} onSubmit={handleSubmit} />
}

export const NotSubmitted = Template.bind({})
NotSubmitted.args = {
  apiErrors: {},
  submitting: false,
}

export const Submitting = Template.bind({})
Submitting.args = {
  apiErrors: {},
  submitting: true,
}

export const WithSubmissionErrors = Template.bind({})
WithSubmissionErrors.args = {
  apiErrors: {
    nonFieldErrors: 'The server got unhealthy and barfed all over itself. Ugh.',
    firstName: "Pfft that's a dumb name",
  },
  submitting: false,
}

export const WithAxiosMock = (args) => {
  const mock = (apiMock) => {
    // Using the testing panel of Google Cloud Functions, you can try out the functions and get real responses.
    // I've copied some here, adapted for comedy and we can use that to mock up an erroneous response from the API.
    apiMock
      .onPost('https://europe-west1-planex.cloudfunctions.net/contact')
      .reply(
        mockError(400, {
          nonFieldErrors: 'Something overarchingly terrible happened',
          email: 'This is terrible email. What, jobs@apple.com was taken?',
          firstName: "Pfft that's a dumb name",
          lastName: "I don't like your surname",
          message:
            'This message contains content that is offensive to cloud functions',
        })
      )
  }
  return (
    <AxiosMock mock={mock}>
      <FormHandler FormComponent={ContactForm} endpoint="/contact" {...args} />
    </AxiosMock>
  )
}
WithAxiosMock.args = {}
