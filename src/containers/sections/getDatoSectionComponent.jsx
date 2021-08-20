import Team from '../../components/sections/Team'

const InvalidSection = ({ data }) => {
  console.warning(
    'Invalid section id or missing mapping for section data ',
    data
  )
  return null
}

const getDatoSectionComponent = (datoId) => {
  const sectionType = datoId.split('-')[0].replace('DatoCms', '')
  const sectionTypeMap = {
    PeopleSection: Team,
  }
  return sectionTypeMap[sectionType] || InvalidSection
}

export default getDatoSectionComponent
