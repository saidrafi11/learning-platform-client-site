import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const course = useLoaderData();
    const {_id, title,details} = course;
    return (
        <div className='container mt-2'>
     


           <Card className="text-center w-50">
      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {details}
        </Card.Text>
        
      </Card.Body>
      <Card.Footer className="text-muted">Course ID: {_id}</Card.Footer>
    </Card>
        </div>
    );
};

export default Checkout;