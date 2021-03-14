import React, { useEffect } from 'react'
import { axios } from '../axios'
import MockAdapter from 'axios-mock-adapter'

const apiMock = new MockAdapter(axios, { delayResponse: 2000 })

/**
 * A mock adapter for axios
 *
 * From https://gist.github.com/rafaelrozon/ed86efbea53094726e162dc05882cddc
 *
 * Use within stories like:
 * ```
 * import AxiosMock from '.storybook/AxiosMock'
 * export const MyStory = () => {
 *   const mock = (apiMock) => {
 *     apiMock.onGet('/api/meetings/1').reply(200, {
 *       id: 1,
 *       title: 'A Meeting',
 *     })
 *   }
 *   return (
 *     <AxiosMock mock={mock}>
 *       <MeetingComponentThatUsesAxios />
 *     </AxiosMock>
 *   )
 * }
 * ```
 */
const AxiosMock = ({ children, mock }) => {
  useEffect(() => {
    mock(apiMock)
    return () => {
      apiMock.reset()
    }
  })
  return children
}

export default AxiosMock

/** A generator function for a mock error from axios-mock-adapter
 *
 * @param status the status code of the mock response
 * @param data returned data from a mock response
 * @param headers an array of headers present in the simulated response
 * @returns {function(*=): Promise<never>}
 */
export const mockError = (status=400, data={}, headers=[]) => {
  return (config) => {
    const error = new Error('Request failed')
    error.config = config
    error.response = {
      status: status,
      data,
      headers,
      config: config,
    }
    return Promise.reject(error)
  }
}
