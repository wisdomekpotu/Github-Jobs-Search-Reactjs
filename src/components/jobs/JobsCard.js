import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import PropTypes from 'prop-types'
import CardGroup from 'react-bootstrap/CardGroup'

const JobsCard = (props) => {
  return (
    <div className="flex-item-left">
      <CardGroup>
        <Card border="primary" style={{ width: '18rem' }}>
          <Card.Header><i className="fa fa-map-marker" aria-hidden="true"></i> {props.job.location} </Card.Header>
          <Card.Body>
            <Card.Title>{props.job.title} <i className="fa fa-check-square-o" aria-hidden="true"></i></Card.Title>
            <Card.Text>
              <i className="fa fa-building-o" aria-hidden="true"></i> {props.job.company}

            </Card.Text>
            <Card.Text>
              <i className="fa fa-clock-o" aria-hidden="true"></i> {props.job.type}

            </Card.Text>
            <Button variant="primary" href={props.job.url} >Apply Here</Button>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  )

}


JobsCard.propTypes = {
  job: PropTypes.object.isRequired,
}
export default JobsCard
