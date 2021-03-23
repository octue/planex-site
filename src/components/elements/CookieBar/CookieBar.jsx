import React from 'react'
import { Helmet } from 'react-helmet'

/**
 * Adds javascript to <head> that creates and manages a cookie consent dialog, using the iubenda plugin.
 */
function CookieBar({}) {
  return (
    <Helmet>
      <script type="text/javascript">
        {`var _iub = _iub || []
          _iub.csConfiguration = {
            consentOnContinuedBrowsing: false,
            lang: 'en',
            siteId: 2195909,
            cookiePolicyId: 46709371,
            banner: {
              prependOnBody: false,
              acceptButtonDisplay: true,
              customizeButtonDisplay: true,
              position: 'float-top-center',
              acceptButtonColor: '#3498db',
              acceptButtonCaptionColor: 'white',
              customizeButtonColor: '#444444',
              customizeButtonCaptionColor: 'white',
              rejectButtonColor: '#3498db',
              rejectButtonCaptionColor: 'white',
              textColor: 'white',
              backgroundColor: '#333333',
            },
          }`}
      </script>
      <script
        type="text/javascript"
        src="//cdn.iubenda.com/cs/iubenda_cs.js"
        charset="UTF-8"
        async
      />
    </Helmet>
  )
}

CookieBar.defaultProps = {}

CookieBar.propTypes = {}

export default CookieBar
