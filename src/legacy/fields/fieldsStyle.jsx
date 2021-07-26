import { octueRedColor, coloredShadow } from 'assets/jss/material-octue.jsx'
import sectionCommentsStyle from 'assets/jss/material-octue/views/blogPostSections/sectionCommentsStyle.jsx'
import modalStyle from 'assets/jss/material-octue/modalStyle.jsx'

const fieldsStyle = {
  ...sectionCommentsStyle,
  ...modalStyle,
  coloredShadow,
  field: {
    maxWidth: '500px',
    marginLeft: '18px',
    marginRight: '18px',
    '&, &event': {
      maxWidth: '2000px',
    },
  },
  headingField: {
    '&, &event': {
      color: '#3C4858',
      fontWeight: '700',
      fontFamily: "'Work Sans', sans-serif",
      marginBottom: '25px',
      marginTop: '30px',
      minHeight: '32px',
      textDecoration: 'none',
    },
  },
  paragraphField: {
    whiteSpace: 'pre-line',
    '&, &event': {
      color: '#555',
      fontSize: '1rem',
      lineHeight: '1.4em',
      marginBottom: '30px',
    },
  },
  bibliography: {
    '&, &csl-entry': {
      fontSize: '75%',
      fontWeight: '400',
      color: '#555',
    },
  },
  disabled: {
    opacity: '0.65',
    pointerEvents: 'none',
  },
  imageContainer: {
    marginLeft: '0px',
    marginRight: '0px',
    '@media (min-width: 576px)': {
      marginLeft: '0px',
      marginRight: '0px',
    },
    '@media (min-width: 768px)': {
      marginLeft: '0px',
      marginRight: '0px',
    },
    '@media (min-width: 992px)': {
      marginLeft: '15px',
      marginRight: '15px',
    },
    '@media (min-width: 1200px)': {
      marginLeft: '40px',
      marginRight: '40px',
    },
    marginBottom: '25px',
  },
  cardHeaderImage: {
    marginTop: '0px',
    marginBottom: '15px',
  },
  avatarIcon: {
    color: octueRedColor,
    width: '48px',
    height: '48px',
    padding: '12px',
    '@media (min-width: 576px)': {
      width: '48px',
      height: '48px',
      padding: '12px',
    },
    '@media (min-width: 768px)': {
      width: '48px',
      height: '48px',
      padding: '12px',
    },
    '@media (min-width: 992px)': {
      width: '64px',
      height: '64px',
      padding: '16px',
    },
    '@media (min-width: 1200px)': {
      width: '64px',
      height: '64px',
      padding: '16px',
    },
  },
}

export default fieldsStyle
