import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CategoryCardSingle = ({category}) => {
    const {name, id} = category;
    // console.log(img)
    return (
  <div className='m-2'>
        <Card body><Link className='text-decoration-none fw-semibold text-dark' to={`/course/${id}`}>{name}</Link>
        
            </Card>
        </div>
    );
};

export default CategoryCardSingle;