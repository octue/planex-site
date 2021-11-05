import DatoCmsCtaContact from './DatoCmsCtaContact'
import DatoCmsCtaLink from './DatoCmsCtaLink'
import DatoCmsCtaSubscribe from './DatoCmsCtaSubscribe'
import DatoCmsFullWidthImage from './DatoCmsFullWidthImage'
import DatoCmsHexGridLink from './DatoCmsHexGridLink'
import DatoCmsTypography from './DatoCmsTypography'

const componentTypeMap = {
  DatoCmsCtaContact,
  DatoCmsCtaLink,
  DatoCmsCtaSubscribe,
  DatoCmsFullWidthImage,
  DatoCmsHexGridLink,
  DatoCmsTypography,
}

const InvalidComponent = (props) => {
  console.warn(
    'Invalid component id or missing mapping for component props ',
    props
  )
  return null
}

const getDatoComponent = (datoId) => {
  const componentType = datoId.split('-')[0]
  return componentTypeMap[componentType] || InvalidComponent
}

export default getDatoComponent
