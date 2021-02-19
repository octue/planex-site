import { container } from 'assets/jss/material-octue.jsx'

import sectionsStyle from 'assets/jss/material-octue/sectionsStyle.jsx'
import fieldsStyle from 'assets/jss/material-octue/fieldsStyle'

const carouselSectionStyle = {
  ...fieldsStyle,
  ...sectionsStyle,
  container: {
    color: '#FFFFFF',
    ...container,
    zIndex: '2',
    height: '100vh',
  },
}

export default carouselSectionStyle
