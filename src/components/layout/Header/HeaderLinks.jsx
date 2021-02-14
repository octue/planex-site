import React from 'react'
import PropTypes from 'prop-types'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import withStyles from '@material-ui/core/styles/withStyles'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import AppsIcon from '@material-ui/icons/Apps'
// import FormatQuoteIcon from '@material-ui/icons/FormatQuote'
import PeopleIcon from '@material-ui/icons/People'
// import ScatterPlotIcon from '@material-ui/icons/ScatterPlot'
import RssFeedIcon from '@material-ui/icons/RssFeed'

import Link from 'components/navigation/Link.jsx'
import CustomDropdown from 'components/site/CustomDropdown/CustomDropdown'
import NavSearch from 'containers/site/NavSearch'

import headerLinksStyle from 'assets/jss/material-octue/components/headerLinksStyle.jsx'

// TODO Automate the generation of header links based on the tree structure in the site pages
function HeaderLinks({ ...props }) {
  const { classes, dropdownHoverColor, showSearch } = props
  return (
    <List className={`${classes.list} ${classes.mlAuto}`}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          hoverColor={dropdownHoverColor}
          buttonText="About"
          buttonProps={{
            className: classes.navLink,
            color: 'transparent',
          }}
          buttonIcon={AppsIcon}
          dropdownList={[
            <Link to="/about#team" className={classes.dropdownLink}>
              <PeopleIcon className={classes.dropdownIcons} /> Team
            </Link>,
          ]}
        >
          {/* <Link to="/about#mission" className={classes.dropdownLink}> */}
          {/*  <ScatterPlotIcon className={classes.dropdownIcons} /> Mission */}
          {/* </Link> */}
          {/* <Link to="/about#testimonials" className={classes.dropdownLink}> */}
          {/*  <FormatQuoteIcon className={classes.dropdownIcons} /> Testimonials */}
          {/* </Link> */}
          {/* <Link to="/about#faqs" className={classes.dropdownLink}> */}
          {/*  <PeopleIcon className={classes.dropdownIcons} /> FAQs */}
          {/* </Link> */}
        </CustomDropdown>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link
          href="/press/"
          target={undefined}
          rel={undefined}
          className={classes.navLink}
        >
          <RssFeedIcon className={classes.icons} /> Press
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to="/login" className={classes.navLink}>
          <AccountCircleIcon className={classes.icons} /> Login
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to="/beta" className={classes.navLink}>
          <AddCircleIcon className={classes.icons} /> Sign up
        </Link>
      </ListItem>
      {showSearch ? (
        <ListItem className={classes.listItem}>
          <NavSearch />
        </ListItem>
      ) : null}
    </List>
  )
}

HeaderLinks.defaultProps = {
  hoverColor: 'primary',
  dropdownHoverColor: 'primary',
}

HeaderLinks.propTypes = {
  hoverColor: PropTypes.oneOf([
    'dark',
    'primary',
    'info',
    'success',
    'warning',
    'danger',
    'rose',
  ]),
  dropdownHoverColor: PropTypes.oneOf([
    'dark',
    'primary',
    'info',
    'success',
    'warning',
    'danger',
    'rose',
  ]),
}

export default withStyles(headerLinksStyle)(HeaderLinks)
