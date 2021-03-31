import React from 'react'
import SubscribeForm from './SubscribeForm'
import AxiosMock from '../../../../.storybook/AxiosMock'
import FormHandler from '../../../containers/forms/FormHandler'

export default {
  title: 'Forms/Subscribe',
  component: SubscribeForm,
  parameters: { actions: { argTypesRegex: '^on.*' } },
}

const Template = (args) => {
  const handleSubmit = (data) => {
    console.log('onSubmit data:', data)
  }
  return <SubscribeForm {...args} onSubmit={handleSubmit} />
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
    email: 'We think this email is dodgy',
  },
  submitting: false,
}

export const WithAxiosMock = (args) => {
  const mock = (apiMock) => {
    // Using the testing panel of Google Cloud Functions, you can try out the functions and get real responses.
    // I've copied some here, adapted for comedy and we can use that to mock up an erroneous response from the API.
    apiMock
      .onPost('https://europe-west1-planex.cloudfunctions.net/subscribe')
      .reply((config) => {
        const error = new Error('Request failed')
        error.config = config
        error.response = {
          status: 400,
          data: {
            nonFieldErrors: 'Something overarchingly terrible happened',
            email: 'This is terrible email. What, jobs@apple.com was taken?',
          },
          headers: [],
          config: config,
        }
        return Promise.reject(error)
      })
  }
  return (
    <AxiosMock mock={mock}>
      <FormHandler
        FormComponent={SubscribeForm}
        endpoint="/subscribe"
        {...args}
      />
    </AxiosMock>
  )
}
WithAxiosMock.args = {}
