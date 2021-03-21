import React from 'react'
import CookieConsent from 'react-cookie-consent'
import { ThemeProvider } from '@material-ui/styles'
import { darkTheme } from '../../../themes'
import hexToRgb from '../../../themes/hexToRgb'
import { Link } from '../../../components/core/Link'

function CookieBar({}) {
  return (
    <ThemeProvider theme={darkTheme}>
      <CookieConsent
        location="bottom"
        buttonText="Ok"
        cookieName="octue-cookie-consent"
        buttonStyle={{
          background: 'none',
          color: '#ffffff',
          border: '2px solid #ffffff',
          borderRadius: '4px',
          fontWeight: '400',
          fontSize: '14px',
          textTransform: 'uppercase',
          textDecoration: 'none',
          padding: '8px 16px',
          '&:hover, &:focus': {
            backgroundColor: `rgba(${hexToRgb('#ffffff')}, 0.2)`,
          },
        }}
        expires={365}
      >
        Like almost all websites, we use cookies to enhance your experience. You
        can read more about our privacy policy{' '}
        <Link href="/terms-and-conditions">here</Link>.
      </CookieConsent>
    </ThemeProvider>
  )
}

CookieBar.defaultProps = {}

CookieBar.propTypes = {}

export default CookieBar
