import React from 'react'
import { Helmet } from 'react-helmet'

export default function Fonts({ children }) {
  return (
    <>
      <Helmet>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
        {/* <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,600&display=swap"
        /> */}
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Open+Sans&family=Work+Sans:ital,wght@0,300;0,500;1,500&display=swap');
        </style>
      </Helmet>
      {children}
    </>
  )
}
