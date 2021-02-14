import React from 'react'
import ErrorPage from './ErrorPage'

export default {
  title: 'Layout/ErrorPage',
  component: ErrorPage,
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    layout: 'fullscreen',
  },
}

const Template = (args) => <ErrorPage {...args} />

export const Simple = Template.bind({})
Simple.args = {
  code: '456',
  text: 'Maybe Not Here',
  description:
    'This is some kind of an error. Who knew that Tom would make up an HTTP error code?',
}
