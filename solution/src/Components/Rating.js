import React from 'react'
import {Card, Button, Row} from 'react-bootstrap'

const Rating = () => {
  return (
    <Card 
    key={Card}
    text={Text}
    style={{ width: '18rem' }}
    className="mb-2">
    <Card.Img variant="top" src="icon-star.svg" alt='' />
    <Card.Body>
      <Card.Title>How did we do?</Card.Title>
      <Card.Text>
      Please let us know how we did with your support request. All feedback is appreciated 
        to help us improve our offering!
      </Card.Text>
      <Row>
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button>4</Button>
          <Button>5</Button>
        </Row>
          <div>
      <Button className="submit-rating" variant="primary">Submit</Button>
      </div>
    </Card.Body>
  </Card>

  )
}

export default Rating