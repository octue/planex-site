import ArticlesPreview from '../../components/sections/ArticlesPreview'
import HexBullets from '../../components/sections/HexBullets'
import JoinTheMovement from '../../components/sections/JoinTheMovement'
import Partners from '../../components/sections/Partners'
import People from '../../components/sections/People'
import TwoColumn from '../../components/sections/TwoColumn'
import Custom from './Custom'

const InvalidSection = ({ data }) => {
  console.warn('Invalid section id or missing mapping for section data ', data)
  return null
}

const getDatoSectionComponent = (datoId) => {
  const sectionType = datoId.split('-')[0].replace('DatoCms', '')
  const sectionTypeMap = {
    ArticlesPreviewSection: ArticlesPreview,
    CustomSection: Custom,
    HexBulletsSection: HexBullets,
    JoinSection: JoinTheMovement,
    PartnersSection: Partners,
    PeopleSection: People,
    TwoColumnSection: TwoColumn,
  }
  return sectionTypeMap[sectionType] || InvalidSection
}

export default getDatoSectionComponent
