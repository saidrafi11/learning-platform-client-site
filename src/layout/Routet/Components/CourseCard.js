import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CourseCard = ({course}) => {
    const {_id, title, thumbnail_url} = course;
    return (
        <div className='container col m-2'>
           <Card className='card '    style={{ width: '18rem' }}>
      <Card.Img  variant="top" src={thumbnail_url} />
      <Card.Body>
        <Card.Title><h6>{title}</h6></Card.Title>
    
        <Link variant='outlined' className='text-decoration-none fw-semibold text-dark' to={`/course/${_id}`}>Details</Link>
      </Card.Body>
    </Card> 
        </div>
    );
};

export default CourseCard;