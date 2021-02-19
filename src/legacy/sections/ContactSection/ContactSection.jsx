import React from 'react'
import classNames from 'classnames'
import { makeStyles } from '@material-ui/core/styles'

import SectionTitle from 'components/site/Sections/SectionTitle.jsx'
import GridContainer from 'components/common/Grid/GridContainer.jsx'
import GridItem from 'components/common/Grid/GridItem.jsx'
import ContactForm from 'containers/forms/ContactForm.jsx'

import { container } from 'assets/jss/material-octue'

const useStyles = makeStyles((theme) => ({
  container,
  section: {
    paddingBottom: theme.spacing(4),
  },
  formContainer: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
}))

function ContactSection({ title, subtitle }) {
  const classes = useStyles()
  return (
    <div className={classNames(classes.container, classes.section)}>
      <SectionTitle title={title} subtitle={subtitle} />
      <GridContainer justify="center">
        <GridItem xs={10} sm={6}>
          <ContactForm />
        </GridItem>
        {/* TODO - add when we have an office */}
        {/* <GridItem md={4} sm={4} className={classes.mlAuto}> */}
        {/*  <InfoArea */}
        {/*    className={classes.info} */}
        {/*    title="Find us at the office" */}
        {/*    description={ */}
        {/*      <p> */}
        {/*        Department of History, Classics and Archaeology <br /> */}
        {/*        Birkbeck, University of London <br /> */}
        {/*        Malet Street, Bloomsbury <br /> */}
        {/*        London WC1E 7HX */}
        {/*      </p> */}
        {/*    } */}
        {/*    icon={PinDrop} */}
        {/*    iconColor="primary" */}
        {/*  /> */}
        {/* </GridItem> */}
      </GridContainer>
    </div>
  )
}

export default ContactSection
