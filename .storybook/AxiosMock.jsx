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
