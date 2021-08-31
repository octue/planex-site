import Team from '../../components/sections/Team'
import JoinTheMovement from '../../components/sections/JoinTheMovement'
import Partners from '../../components/sections/Partners'

const InvalidSection = ({ data }) => {
  console.warn('Invalid section id or missing mapping for section data ', data)
  return null
}

const getDatoSectionComponent = (datoId) => {
  const sectionType = datoId.split('-')[0].replace('DatoCms', '')
  const sectionTypeMap = {
    PeopleSection: Team,
    JoinSection: JoinTheMovement,
    PartnersSection: Partners,
  }
  return sectionTypeMap[sectionType] || InvalidSection
}

export default getDatoSectionComponent
