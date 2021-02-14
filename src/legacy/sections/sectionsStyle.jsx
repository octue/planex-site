import {
  container,
  title,
  cardTitle,
  description,
  mlAuto,
  mrAuto,
  section,
  sectionDark,
  coloredShadow,
} from 'assets/jss/material-octue.jsx'
import { blackColor, hexToRgb } from 'assets/jss/material-octue'

const sectionsStyle = {
  field: {
    maxWidth: '100%',
  },
  title,
  cardTitle,
  cardTitleWhite: {
    ...cardTitle,
    color: '#fff!important',
    '& small': {
      color: 'rgba(255,255,255,0.8)!important',
    },
  },
  coloredShadow,
  container,
  darkFilter: {
    '&:before': {
      background: `rgba(${hexToRgb(blackColor)}, 0.5)`,
    },
    '&:after,&:before': {
      position: 'absolute',
      zIndex: '1',
      width: '100%',
      height: '100%',
      display: 'block',
      left: '0',
      top: '0',
      content: "''",
    },
  },
  description,
  gridContainer: {},
  gridItem: {},
  infoArea: {
    maxWidth: 'none',
    margin: '0 auto',
    padding: '10px 0 0px',
  },
  mlAuto,
  mrAuto,
  section,
  sectionDark,
  sectionDescription: {
    ...description,
  },
  sectionHeading: {
    ...title,
  },
  sectionImage: {
    ...sectionDark,
    ...section,
    position: 'relative',
    '& $container': {
      zIndex: '2',
      position: 'relative',
    },
    '&:after': {
      position: 'absolute',
      zIndex: '1',
      width: '100%',
      height: '100%',
      display: 'block',
      left: '0',
      top: '0',
      content: "''",
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
  },
  subtitle: {
    fontSize: '1.313rem',
    maxWidth: '500px',
    margin: '10px auto 0',
    whiteSpace: 'pre-line', // Allows input from textAreas to have multiple lines
  },
  textCenter: {
    textAlign: 'center',
  },
  whiteSpace: 'pre-line', // Allows input from textAreas to have multiple lines
}

export default sectionsStyle
