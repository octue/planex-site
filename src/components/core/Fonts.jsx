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
        {/* The following is equivalent to:
            <style>
              @import
              url('https://fonts.googleapis.com/css2?family=Open+Sans&family=Work+Sans:ital,wght@0,300;0,500;1,500&display=swap');
            </style>
            But, being inlined it avoids the request-response cycle which holds up the initial render by 300ms or so.
            To change the font set, get the URL of the specific fonts you want (like this one),
            update the comment above with your url, visit the URL and paste its contents into the <style> tag below.
         */}
        <style>
          {`
            /* cyrillic-ext */
            @font-face {
              font-family: 'Open Sans';
              font-style: normal;
              font-weight: 400;
              font-display: swap;
              src: url(https://fonts.gstatic.com/s/opensans/v23/mem8YaGs126MiZpBA-UFWJ0bf8pkAp6a.woff2) format('woff2');
              unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
            }
            /* cyrillic */
            @font-face {
              font-family: 'Open Sans';
              font-style: normal;
              font-weight: 400;
              font-display: swap;
              src: url(https://fonts.gstatic.com/s/opensans/v23/mem8YaGs126MiZpBA-UFUZ0bf8pkAp6a.woff2) format('woff2');
              unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
            }
            /* greek-ext */
            @font-face {
              font-family: 'Open Sans';
              font-style: normal;
              font-weight: 400;
              font-display: swap;
              src: url(https://fonts.gstatic.com/s/opensans/v23/mem8YaGs126MiZpBA-UFWZ0bf8pkAp6a.woff2) format('woff2');
              unicode-range: U+1F00-1FFF;
            }
            /* greek */
            @font-face {
              font-family: 'Open Sans';
              font-style: normal;
              font-weight: 400;
              font-display: swap;
              src: url(https://fonts.gstatic.com/s/opensans/v23/mem8YaGs126MiZpBA-UFVp0bf8pkAp6a.woff2) format('woff2');
              unicode-range: U+0370-03FF;
            }
            /* vietnamese */
            @font-face {
              font-family: 'Open Sans';
              font-style: normal;
              font-weight: 400;
              font-display: swap;
              src: url(https://fonts.gstatic.com/s/opensans/v23/mem8YaGs126MiZpBA-UFWp0bf8pkAp6a.woff2) format('woff2');
              unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
            }
            /* latin-ext */
            @font-face {
              font-family: 'Open Sans';
              font-style: normal;
              font-weight: 400;
              font-display: swap;
              src: url(https://fonts.gstatic.com/s/opensans/v23/mem8YaGs126MiZpBA-UFW50bf8pkAp6a.woff2) format('woff2');
              unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
            }
            /* latin */
            @font-face {
              font-family: 'Open Sans';
              font-style: normal;
              font-weight: 400;
              font-display: swap;
              src: url(https://fonts.gstatic.com/s/opensans/v23/mem8YaGs126MiZpBA-UFVZ0bf8pkAg.woff2) format('woff2');
              unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
            }
            /* vietnamese */
            @font-face {
              font-family: 'Work Sans';
              font-style: italic;
              font-weight: 500;
              font-display: swap;
              src: url(https://fonts.gstatic.com/s/worksans/v11/QGY9z_wNahGAdqQ43Rh_ebrnlwyYfEPxPoGU7Gs5q4feCSXCQNBfHFA.woff) format('woff');
              unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
            }
            /* latin-ext */
            @font-face {
              font-family: 'Work Sans';
              font-style: italic;
              font-weight: 500;
              font-display: swap;
              src: url(https://fonts.gstatic.com/s/worksans/v11/QGY9z_wNahGAdqQ43Rh_ebrnlwyYfEPxPoGU7Gs5qofeCSXCQNBfHFA.woff) format('woff');
              unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
            }
            /* latin */
            @font-face {
              font-family: 'Work Sans';
              font-style: italic;
              font-weight: 500;
              font-display: swap;
              src: url(https://fonts.gstatic.com/s/worksans/v11/QGY9z_wNahGAdqQ43Rh_ebrnlwyYfEPxPoGU7Gs5pIfeCSXCQNBf.woff) format('woff');
              unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
            }
            /* vietnamese */
            @font-face {
              font-family: 'Work Sans';
              font-style: normal;
              font-weight: 300;
              font-display: swap;
              src: url(https://fonts.gstatic.com/s/worksans/v11/QGYsz_wNahGAdqQ43Rh_c6DptfpA4cD3.woff2) format('woff2');
              unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
            }
            /* latin-ext */
            @font-face {
              font-family: 'Work Sans';
              font-style: normal;
              font-weight: 300;
              font-display: swap;
              src: url(https://fonts.gstatic.com/s/worksans/v11/QGYsz_wNahGAdqQ43Rh_cqDptfpA4cD3.woff2) format('woff2');
              unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
            }
            /* latin */
            @font-face {
              font-family: 'Work Sans';
              font-style: normal;
              font-weight: 300;
              font-display: swap;
              src: url(https://fonts.gstatic.com/s/worksans/v11/QGYsz_wNahGAdqQ43Rh_fKDptfpA4Q.woff2) format('woff2');
              unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
            }
            /* vietnamese */
            @font-face {
              font-family: 'Work Sans';
              font-style: normal;
              font-weight: 500;
              font-display: swap;
              src: url(https://fonts.gstatic.com/s/worksans/v11/QGYsz_wNahGAdqQ43Rh_c6DptfpA4cD3.woff2) format('woff2');
              unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
            }
            /* latin-ext */
            @font-face {
              font-family: 'Work Sans';
              font-style: normal;
              font-weight: 500;
              font-display: swap;
              src: url(https://fonts.gstatic.com/s/worksans/v11/QGYsz_wNahGAdqQ43Rh_cqDptfpA4cD3.woff2) format('woff2');
              unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
            }
            /* latin */
            @font-face {
              font-family: 'Work Sans';
              font-style: normal;
              font-weight: 500;
              font-display: swap;
              src: url(https://fonts.gstatic.com/s/worksans/v11/QGYsz_wNahGAdqQ43Rh_fKDptfpA4Q.woff2) format('woff2');
              unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
            }
          `}
        </style>
      </Helmet>
      {children}
    </>
  )
}
