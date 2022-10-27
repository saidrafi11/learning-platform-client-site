import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Outlet, useLoaderData } from 'react-router-dom';
import CourseCard from './CourseCard';

const Courses = () => {
    const allCourses = useLoaderData();
    
    return (
        <div>
            <Container className='row d-flex'>
                <Col className='container overflow-hidden col-sm-8 justify-content-center'>
                    <div className='row lg-gx-5 sm-gx-1' >
                        {
                            allCourses.map(course => <CourseCard key={course._id} course={course}></CourseCard>)
                        }

                    </div>
                    
                </Col>
                <Col className='col-sm-4'>

                            <Outlet></Outlet>
                    </Col>
            </Container>
        </div>
    );
};

export default Courses;