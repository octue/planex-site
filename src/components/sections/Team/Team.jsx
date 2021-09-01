import React from 'react'
import { makeStyles } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import { SectionHeading, SectionContainer, Person } from '../../elements'

const useStyles = makeStyles((theme) => ({
  parentBox: {
    flexDirection: 'column',
  },
  titleBox: {
    marginBottom: theme.spacing(2),
  },
  peopleBox: {
    marginTop: `-${theme.spacing(4)}px`, // person boxes have a large margin on top, this offsets
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  },
  personBox: {
    flexBasis: `calc(50% - ${theme.spacing(6)}px)`,
    marginTop: theme.spacing(8),
  },
}))

const PeopleSection = ({ people, heading, subheading, ...rest }) => {
  const classes = useStyles()
  return (
    <SectionContainer {...rest}>
      <Box display="flex" className={classes.parentBox}>
        <Box className={classes.titleBox}>
          <SectionHeading>{heading}</SectionHeading>
        </Box>
        <Box className={classes.peopleBox}>
          {people.map((person) => (
            <Box display="flex" className={classes.personBox}>
              <Person {...person} />
            </Box>
          ))}
        </Box>
      </Box>
    </SectionContainer>
  )
}

export default PeopleSection
