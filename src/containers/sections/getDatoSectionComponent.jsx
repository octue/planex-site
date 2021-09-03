import ArticlesPreview from '../../components/sections/ArticlesPreview'
import HexBullets from '../../components/sections/HexBullets'
import JoinTheMovement from '../../components/sections/JoinTheMovement'
import Partners from '../../components/sections/Partners'
import People from '../../components/sections/People'

const InvalidSection = ({ data }) => {
  console.warn('Invalid section id or missing mapping for section data ', data)
  return null
}

const getDatoSectionComponent = (datoId) => {
  const sectionType = datoId.split('-')[0].replace('DatoCms', '')
  const sectionTypeMap = {
    ArticlesPreviewSection: ArticlesPreview,
    HexBulletsSection: HexBullets,
    JoinSection: JoinTheMovement,
    PartnersSection: Partners,
    PeopleSection: People,
  }
  return sectionTypeMap[sectionType] || InvalidSection
}

export default getDatoSectionComponent
