import React from 'react'
import PropTypes from 'prop-types'
import Box from '@material-ui/core/Box'
import PersonBioCard from './PersonBioCard'
import Hexagon from '../../hexagon/Hexagon'

const Person = ({ avatar, ...rest }) => {
  return (
    <>
      <Box display="flex" width="100%">
        <Box display="flex">
          <Hexagon
            gatsbyImageData={avatar.gatsbyImageData}
            alt={avatar.alt}
            title={avatar.title}
          />
        </Box>
        <PersonBioCard {...rest} flexGrow={1} ml={3} />
      </Box>
    </>
  )
}

Person.defaultProps = {}

Person.propTypes = {
  ...PersonBioCard.propTypes,
  avatar: PropTypes.object.isRequired,
}

export default Person
