import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import AwesomeScientist from '../../components/sections/AwesomeScientist'
import DataServices from '../../components/sections/DataServices'
import DigitalTwins from '../../components/sections/DigitalTwins'
import DoMoreWithYourData from '../../components/sections/DoMoreWithYourData'
import HowWeHelp from '../../components/sections/HowWeHelp'
import SponsorUs from '../../components/sections/SponsorUs'
import Strategy from '../../components/sections/Strategy'
import Support from '../../components/sections/Support'
import TellUsWhatYouNeed from '../../components/sections/TellUsWhatYouNeed'
import Volunteer from '../../components/sections/Volunteer'
import LastButNotLeast from '../../components/sections/LastButNotLeast'

const map = {
  AwesomeScientist,
  DataServices,
  DigitalTwins,
  DoMoreWithYourData,
  HowWeHelp,
  SponsorUs,
  Strategy,
  Support,
  TellUsWhatYouNeed,
  Volunteer,
  LastButNotLeast,
}

const Custom = ({ id, componentName }) => {
  const Component = useMemo(() => map[componentName], [componentName])
  return <Component id={id} />
}

Custom.defaultProps = {}

Custom.propTypes = {
  componentName: PropTypes.string.isRequired,
}

export default Custom
