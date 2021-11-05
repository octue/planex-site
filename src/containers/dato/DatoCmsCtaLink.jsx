import React from 'react'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'

import DatoLink from '../../components/core/DatoLink'

const DatoCmsCtaLink = ({ text, url, openInNewTab, optimiseInternalLink }) => {
  return (
    <Box width="100%">
      <DatoLink
        url={url}
        openInNewTab={openInNewTab}
        optimiseInternalLink={optimiseInternalLink}
      >
        <Button variant="contained" color="primary" size="large">
          {text}
        </Button>
      </DatoLink>
    </Box>
  )
}

export default DatoCmsCtaLink
