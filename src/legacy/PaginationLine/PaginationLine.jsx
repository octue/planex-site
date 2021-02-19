import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

import Pagination from 'components/Pagination/Pagination.jsx'

import paginationLineStyle from 'assets/jss/material-octue/components/paginationLineStyle.jsx'

class PaginationLine extends React.Component {
  render() {
    const { classes, ...rest } = this.props
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <Pagination {...rest} />
        </div>
      </div>
    )
  }
}

PaginationLine.defaultProps = {
  color: 'primary',
}

PaginationLine.propTypes = {
  classes: PropTypes.object.isRequired,
  pages: PropTypes.arrayOf(
    PropTypes.shape({
      active: PropTypes.bool,
      disabled: PropTypes.bool,
      text: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
        .isRequired,
      onClick: PropTypes.func,
    })
  ).isRequired,
  color: PropTypes.oneOf(['primary', 'info', 'success', 'warning', 'danger']),
}

export default withStyles(paginationLineStyle)(PaginationLine)
