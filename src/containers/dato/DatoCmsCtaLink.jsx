import React from 'react'
import Button from '@material-ui/core/Button'

import DatoLink from '../../components/core/DatoLink'

const DatoCmsCtaLink = ({
  id,
  text,
  url,
  openInNewTab,
  optimiseInternalLink,
  ...rest
}) => {
  return (
    <DatoLink
      url={url}
      openInNewTab={openInNewTab}
      optimiseInternalLink={optimiseInternalLink}
    >
      <Button
        variant="contained"
        color="primary"
        size="large"
        // endIcon={<RssFeed>send</RssFeed>}
      >
        This is how to use a button as a link
      </Button>
    </DatoLink>
  )
}

export default DatoCmsCtaLink
