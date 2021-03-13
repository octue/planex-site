import React from 'react'
import { SnackbarProvider } from 'notistack'

export const wrapRootElement = ({ element }) => {
  return <SnackbarProvider maxSnack={3}>{element}</SnackbarProvider>
}
