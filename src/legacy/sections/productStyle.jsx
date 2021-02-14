import { title } from 'assets/jss/material-octue.jsx'
import sectionsStyle from 'assets/jss/material-octue/sectionsStyle.jsx'

const productSectionStyle = {
  ...sectionsStyle,
  title: {
    ...title,
    marginBottom: '1rem',
    marginTop: '30px',
    minHeight: '32px',
    textDecoration: 'none',
  },
  description: {
    color: '#999',
  },
}

export default productSectionStyle
