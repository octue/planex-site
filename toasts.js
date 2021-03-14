const options = {
  anchorOrigin: {
    vertical: 'top',
    horizontal: 'right',
  },
}

/**
 * There is no global state management in Gatsby. So I cannot create a toast message in, say, the contact form
 * container then expect it to persist onto other pages if a navigation occurs immediately after.
 *
 * Using url query params, we can navigate to a page with ?toasts=contact-success,subscribe-success and then in the
 * useEffect of that page, issue those toasts on the new page then pop them out of the query params.
 *
 */
export const toastMessages = {
  'contact-success': [
    "Thanks, we'll get back to you soon!",
    {
      ...options,
      variant: 'success',
    },
  ],
  'contact-failure': [
    'Something went wrong... can you try again later?',
    {
      ...options,
      variant: 'error',
    },
  ],
  'subscribe-success': [
    "Thanks, you'll be hearing from us!",
    {
      ...options,
      variant: 'success',
    },
  ],
  'subscribe-failure': [
    'Something went wrong... can you try again later?',
    {
      ...options,
      variant: 'error',
    },
  ],
}
