import React from 'react'
import { makeStyles } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import SectionHeading from '../../elements/SectionTitle/SectionHeading'
import Person from '../../elements/Person/Person'

const useStyles = makeStyles((theme) => ({
  sectionBox: {
    backgroundColor: theme.palette.background.default,
  },
  container: {
    height: '100%',
    paddingTop: '180px',
    [theme.breakpoints.down('xs')]: {
      paddingTop: '100px',
    },
  },
  parentBox: {
    flexDirection: 'column',
  },
  titleBox: {
    marginBottom: '16px',
  },
  peopleBox: {
    marginTop: `-${theme.spacing(4)}px`, // person boxes have a large marginon top, this offsets
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
    <Box component="section" className={classes.sectionBox} {...rest}>
      <Container maxWidth="lg" className={classes.container}>
        <Box display="flex" className={classes.parentBox}>
          <Box className={classes.titleBox}>
            <SectionHeading text={heading} />
          </Box>
          <Box className={classes.peopleBox}>
            {people.map((person) => (
              <Box display="flex" className={classes.personBox}>
                <Person {...person} />
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default PeopleSection
