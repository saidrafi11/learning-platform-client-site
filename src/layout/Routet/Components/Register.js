import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Firebase/Context/AuthProvider';

const Register = () => {
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation()
    const from = location.state?.from?.pathname||'/';

    const {createUser} = useContext(AuthContext)
    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email= form.email.value;
        const photoURL = form.photoURL.value;
        const password = form.password.value;
        
        console.log(name, email, password, photoURL)

        createUser(email, password)
        .then(result =>{
            const user = result.user;
            setError('');
            navigate(from, {replace: true})
            console.log(user);
        })
        .catch(e=>{
            console.error(e);
            setError(e.message)
        })
    }
    return (
        <div className='container w-50'>
            <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Your name</Form.Label>
                <Form.Control name='name' type="text" placeholder="Your name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Photo URL</Form.Label>
                <Form.Control name='photoURL' type="text" placeholder="Photo URL" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name='email' placeholder="Enter email" required/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name='password' placeholder="Password" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Label>Already have an account? <Link to="/signin">Signin</Link></Form.Label>
            </Form.Group>
            <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text><br/>
            <Button className='mt-2' variant="primary" type="submit">
                Register
            </Button><br/>
            <Form.Text className='text-danger'>
                {/* {error} */}
      </Form.Text>
        </Form>
        </div>
    );
};

export default Register;