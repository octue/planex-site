import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core'
import Card from '@material-ui/core/Card'
import Copyright from '../../elements/Copyright'
import BackgroundBox from '../../layout/BackgroundBox'


const useStyles = makeStyles((theme) => ({
  card: {
    padding: theme.spacing(2),
  },
}))


function CardPage({ className, children }) {
  const classes = useStyles()

  const cardClassName = className || classes.card

  return (
    <main className={classes.content}>
      <BackgroundBox>
        <Card className={cardClassName}>
          { children }
        </Card>
      </BackgroundBox>
      <Copyright paper />
    </main>
  )
}


CardPage.defaultProps = {
  className: undefined,
}


CardPage.propTypes = {
  /**
   * Class applied to the card component (default just applies a padding)
   */
  className: PropTypes.string,
  /**
   * Children will be rendered into a centred card
   */
  children: PropTypes.node.isRequired,
}


export default CardPage
