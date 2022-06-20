import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import DatoLink from '../../components/core/DatoLink'
import React from 'react'

const DatoCmsCtaLink = ({
  text,
  url,
  openInNewTab,
  optimiseInternalLink,
  ...rest
}) => {
  return (
    <Box width="100%" {...rest}>
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
