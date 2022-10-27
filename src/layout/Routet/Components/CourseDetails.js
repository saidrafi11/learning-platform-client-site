import { IconButton } from '@mui/material';
import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Button } from 'react-bootstrap';








const CourseDetails = () => {
    const course = useLoaderData();
    const {_id,title, image_url, details} = course;
  
    return (
        <div className='container justify-content-center mt-3'>
          {/* <div>
    <ReactToPdf targetRef={ref} filename="div-blue.pdf">
        {({toPdf}) => (
            <button onClick={toPdf}>Generate pdf</button>
        )}
    </ReactToPdf>
    <div style={{width: 500, height: 500, background: 'blue'}} ref={ref}/>
</div> */}


            <div class="card" style={{width: '100%'}}>
  <img src={image_url} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{title}</h5>
    <p class="card-text">{details}</p>

      <Link to={`/checkout/${_id}`}> <Button variant="outline-primary"><AddShoppingCartIcon />Get premium access</Button></Link>
    

    
    
  </div>
</div>
        </div>
    );
};

export default CourseDetails;