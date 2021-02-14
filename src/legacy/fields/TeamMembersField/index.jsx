import React from 'react'
import { withErrorBoundary } from 'react-error-boundary'
import Typography from '@material-ui/core/Typography'

import Card from 'components/site/Card/Card.jsx'
import CardAvatar from 'components/site/Card/CardAvatar.jsx'
import CardBody from 'components/site/Card/CardBody.jsx'
import CardFooter from 'components/site/Card/CardFooter.jsx'
import Button from 'components/site/CustomButtons/Button.jsx'
import GridItem from 'components/common/Grid/GridItem.jsx'
import GridContainer from 'components/common/Grid/GridContainer.jsx'
import errorLogger, { EmptyDivFallback } from 'errors'

class TeamMember extends React.Component {
  render() {
    const {
      classes,
      image,
      biography,
      twitter,
      facebook,
      linkedin,
      google,
      github,
      name,
      role,
    } = this.props
    const imageUrl = `${window.baseUrl}/api/images/${image}/serve/?filter=fill-200x200`
    return (
      <GridItem xs={12} sm={6} md={4}>
        <Card profile plain>
          <CardAvatar profile plain>
            <img src={imageUrl} alt="profile-pic" className={classes.img} />
          </CardAvatar>
          <CardBody>
            {name ? (
              <Typography variant="h4" color="textPrimary" gutterBottom>
                {name}
              </Typography>
            ) : undefined}
            {role ? (
              <Typography
                variant="subtitle1"
                color="textSecondary"
                gutterBottom
              >
                {role}
              </Typography>
            ) : undefined}
            {biography ? (
              <Typography variant="caption" color="textPrimary">
                {biography}
              </Typography>
            ) : undefined}
          </CardBody>
          <CardFooter profile className={classes.justifyContent}>
            {twitter ? (
              <Button href={twitter} justIcon simple color="twitter">
                <i className="fab fa-twitter" />
              </Button>
            ) : undefined}
            {facebook ? (
              <Button href={facebook} justIcon simple color="facebook">
                <i className="fab fa-facebook" />
              </Button>
            ) : undefined}
            {linkedin ? (
              <Button href={linkedin} justIcon simple color="linkedin">
                <i className="fab fa-linkedin" />
              </Button>
            ) : undefined}
            {google ? (
              <Button href={google} justIcon simple color="google">
                <i className="fab fa-google" />
              </Button>
            ) : undefined}
            {github ? (
              <Button href={github} justIcon simple color="github">
                <i className="fab fa-github" />
              </Button>
            ) : undefined}
          </CardFooter>
        </Card>
      </GridItem>
    )
  }
}

function TeamMembersField({ classes, value }) {
  return (
    <GridContainer
      direction="row"
      justify="space-evenly"
      alignItems="flex-start"
      className={classes.container}
    >
      {value.map((item, idx) => {
        // eslint-disable-next-line react/no-array-index-key
        return <TeamMember {...item} key={idx} classes={classes} />
      })}
    </GridContainer>
  )
}

export default withErrorBoundary(
  TeamMembersField,
  EmptyDivFallback,
  errorLogger
)
