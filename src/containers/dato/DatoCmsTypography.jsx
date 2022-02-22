import React from 'react'
import { renderNodeRule, StructuredText } from 'react-datocms'
import { isParagraph, isRoot, isLink } from 'datocms-structured-text-utils'
import Typography from '../../components/elements/Typography'

import LinkTypography from '@material-ui/core/Link'
import DatoLink from '../../components/core/DatoLink'

const DatoCmsTypography = ({
  content,
  component,
  color,
  variant,
  balance,
  gutterBottom,
}) => {
  return (
    <StructuredText
      data={content}
      customNodeRules={[
        renderNodeRule(isParagraph, ({ children, key, ancestors }) => {
          if (isRoot(ancestors[0])) {
            // If this paragraph node is a top-level one, use Typography to render it
            return (
              <Typography
                color={color || 'inherit'}
                variant={variant}
                component={component || undefined} // because an empty string or null wont work
                balance={balance}
                gutterBottom={gutterBottom}
                key={key}
                align="left"
              >
                {children}
              </Typography>
            )
          } else {
            return children
          }
        }),
        renderNodeRule(isLink, ({ children, node: { url, meta }, key }) => {
          // NB we don't use dato's link meta straight out of the box because it doesn't safely set noreferrer etc
          // Use the DatoLink component to safely render internal or external links
          const openInNewTab = meta?.value === '_blank'
          return (
            <DatoLink key={key} url={url} openInNewTab={openInNewTab}>
              <LinkTypography>{children}</LinkTypography>
            </DatoLink>
          )
        }),
      ]}
    />
  )
}
export default DatoCmsTypography
