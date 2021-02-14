import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Hidden from '@material-ui/core/Hidden'
import Drawer from '@material-ui/core/Drawer'
import Menu from '@material-ui/icons/Menu'
import Close from '@material-ui/icons/Close'
import Icon from '@material-ui/core/Icon'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  logo: {
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2),
    transition: 'all 300ms linear',
    overflow: 'hidden',
  },
  logoImg: {
    height: '35px',
    paddingBottom: '3px',
    verticalAlign: 'middle',
    border: '0',
  },
  appBar: {
    display: 'flex',
    border: '0',
    borderRadius: '3px',
    padding: '0',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    marginBottom: '0px',
    color: grayColor[15],
    width: '100%',
    backgroundColor: whiteColor,
    boxShadow: `0 4px 18px 0px rgba(${hexToRgb(
      blackColor
    )}, 0.12), 0 7px 10px -5px rgba(${hexToRgb(blackColor)}, 0.15)`,
    transition: 'all 150ms ease 0s',
    alignItems: 'center',
    flexFlow: 'row nowrap',
    justifyContent: 'flex-start',
    position: 'relative',
  },
  absolute: {
    position: 'absolute',
    top: 'auto',
  },
  fixed: {
    position: 'fixed',
  },
  container: {
    ...container,
    minHeight: '50px',
    alignItems: 'center',
    justifyContent: 'space-between',
    display: 'flex',
    flexWrap: 'nowrap',
  },
  title: {
    '&,& a': {
      ...defaultFont,
      minWidth: 'unset',
      lineHeight: '30px',
      fontSize: '18px',
      borderRadius: '3px',
      textTransform: 'none',
      whiteSpace: 'nowrap',
      color: 'inherit',
      '&:hover,&:focus': {
        color: 'inherit',
        background: 'transparent',
      },
    },
  },
  appResponsive: {
    margin: '20px 10px',
    marginTop: '0px',
  },
  primary: {
    backgroundColor: primaryColor[0],
    color: whiteColor,
    boxShadow: `0 4px 20px 0px rgba(${hexToRgb(
      blackColor
    )}, 0.14), 0 7px 12px -5px rgba(${hexToRgb(primaryColor[0])}, 0.46)`,
  },
  info: {
    backgroundColor: infoColor[0],
    color: whiteColor,
    boxShadow: `0 4px 20px 0px rgba(${hexToRgb(
      blackColor
    )}, 0.14), 0 7px 12px -5px rgba(${hexToRgb(infoColor[0])}, 0.46)`,
  },
  success: {
    backgroundColor: successColor[0],
    color: whiteColor,
    boxShadow: `0 4px 20px 0px rgba(${hexToRgb(
      blackColor
    )}, 0.14), 0 7px 12px -5px rgba(${hexToRgb(successColor[0])}, 0.46)`,
  },
  warning: {
    backgroundColor: warningColor[0],
    color: whiteColor,
    boxShadow: `0 4px 20px 0px rgba(${hexToRgb(
      blackColor
    )}, 0.14), 0 7px 12px -5px rgba(${hexToRgb(warningColor[0])}, 0.46)`,
  },
  danger: {
    backgroundColor: dangerColor[0],
    color: whiteColor,
    boxShadow: `0 4px 20px 0px rgba(${hexToRgb(
      blackColor
    )}, 0.14), 0 7px 12px -5px rgba(${hexToRgb(dangerColor[0])}, 0.46)`,
  },
  rose: {
    backgroundColor: roseColor[0],
    color: whiteColor,
    boxShadow: `0 4px 20px 0px rgba(${hexToRgb(
      blackColor
    )}, 0.14), 0 7px 12px -5px rgba(${hexToRgb(roseColor[0])}, 0.46)`,
  },
  transparent: {
    backgroundColor: 'transparent !important',
    boxShadow: 'none',
    color: whiteColor,
  },
  dark: {
    color: whiteColor,
    backgroundColor: `${theme.palette.background.paper} !important`,
    boxShadow: `0 4px 20px 0px rgba(${hexToRgb(
      blackColor
    )}, 0.14), 0 7px 12px -5px rgba(${hexToRgb(
      theme.palette.grey[800]
    )}, 0.46)`,
  },
  white: {
    border: '0',
    padding: '0.625rem 0',
    marginBottom: '20px',
    color: grayColor[15],
    backgroundColor: `${whiteColor} !important`,
    boxShadow: `0 4px 18px 0px rgba(${hexToRgb(
      blackColor
    )}, 0.12), 0 7px 10px -5px rgba(${hexToRgb(blackColor)}, 0.15)`,
  },
  drawerPaper: {
    border: 'none',
    bottom: '0',
    transitionProperty: 'top, bottom, width',
    transitionDuration: '.2s, .2s, .35s',
    transitionTimingFunction: 'linear, linear, ease',
    width: drawerWidth,
    ...boxShadow,
    position: 'fixed',
    display: 'block',
    top: '0',
    height: '100vh',
    right: '0',
    left: 'auto',
    visibility: 'visible',
    overflowY: 'visible',
    borderTop: 'none',
    textAlign: 'left',
    paddingRight: '0px',
    paddingLeft: '0',
    ...transition,
  },
  hidden: {
    width: '100%',
  },
  collapse: {
    [theme.breakpoints.up('md')]: {
      display: 'flex !important',
      MsFlexPreferredSize: 'auto',
      flexBasis: 'auto',
    },
    WebkitBoxFlex: '1',
    MsFlexPositive: '1',
    flexGrow: '1',
    WebkitBoxAlign: 'center',
    MsFlexAlign: 'center',
    alignItems: 'center',
  },
  closeButtonDrawer: {
    position: 'absolute',
    right: '8px',
    top: '9px',
    zIndex: '1',
  },
}))

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mobileOpen: false,
    }
    this.handleDrawerToggle = this.handleDrawerToggle.bind(this)
    this.headerColorChange = this.headerColorChange.bind(this)
  }

  componentDidMount() {
    if (this.props.changeColorOnScroll) {
      window.addEventListener('scroll', this.headerColorChange)
    }
  }

  componentWillUnmount() {
    if (this.props.changeColorOnScroll) {
      window.removeEventListener('scroll', this.headerColorChange)
    }
  }

  handleDrawerToggle() {
    // eslint-disable-next-line react/no-access-state-in-setstate
    this.setState({ mobileOpen: !this.state.mobileOpen })
  }

  headerColorChange() {
    const { classes, color, changeColorOnScroll } = this.props
    if (changeColorOnScroll) {
      const windowsScrollTop = window.pageYOffset
      if (windowsScrollTop > changeColorOnScroll.height) {
        document.body
          .getElementsByTagName('header')[0]
          .classList.remove(classes[color])
        document.body
          .getElementsByTagName('header')[0]
          .classList.add(classes[changeColorOnScroll.color])
      } else {
        document.body
          .getElementsByTagName('header')[0]
          .classList.add(classes[color])
        document.body
          .getElementsByTagName('header')[0]
          .classList.remove(classes[changeColorOnScroll.color])
      }
    }
  }

  render() {
    const { classes, color, links, fixed, absolute } = this.props
    const appBarClasses = classNames({
      [classes.appBar]: true,
      [classes[color]]: color,
      [classes.absolute]: absolute,
      [classes.fixed]: fixed,
    })
    return (
      <AppBar className={appBarClasses} id={this.props.id}>
        <Toolbar className={classes.container}>
          <Hidden smDown implementation="css" className={classes.hidden}>
            <GridContainer
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              <GridItem className={classes.logo}>
                <img src={logoText} alt="logo" className={classes.logoImg} />
              </GridItem>
              <GridItem className={classes.collapse}>{links}</GridItem>
            </GridContainer>
          </Hidden>
          <Hidden mdUp>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={this.handleDrawerToggle}
            >
              <Menu />
            </IconButton>
          </Hidden>
        </Toolbar>
        <Hidden mdUp implementation="css">
          <Drawer
            variant="temporary"
            anchor="right"
            open={this.state.mobileOpen}
            classes={{
              paper: classes.drawerPaper,
            }}
            onClose={this.handleDrawerToggle}
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={this.handleDrawerToggle}
              className={classes.closeButtonDrawer}
            >
              <Close />
            </IconButton>
            <div className={classes.appResponsive}>{links}</div>
          </Drawer>
        </Hidden>
      </AppBar>
    )
  }
}

Header.defaultProps = {
  color: 'white',
  id: 'header',
}

Header.propTypes = {
  id: PropTypes.string,
  links: PropTypes.node,
  fixed: PropTypes.bool,
  absolute: PropTypes.bool,
  /* If ture, this will cause the sidebar to initially render as transparent, then when
   * when the window.pageYOffset is higher or equal to 1/3vh the background colour is added.
   */
  colorOnScroll: PropTypes.bool,
}

export default withStyles(headerStyle)(Header)
