import { Button, ButtonGroup } from '@mui/material';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import {  Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Firebase/Context/AuthProvider';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';


const Login = () => {
    const {signIn, providerLogin} = useContext(AuthContext)
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation()
    
    const from = location.state?.from?.pathname||'/';

    const handleSubmit = event =>{
        event.preventDefault();
            const form = event.target;
            
            const email= form.email.value;
           
            const password = form.password.value;
            console.log( email, password)
    
            signIn(email, password)
            .then(result =>{
                const user = result.user;
                
                setError('')
                console.log(user)
            }).catch(error => {
                console.error(error);
                setError(error.message)
            })
    }
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
 const handleGithubSignin =()=>{
  providerLogin(githubProvider)
  .then(result =>{
    const user = result.user
    navigate(from, {replace: true})
    console.log(user)
}).catch(error =>console.error(error))
 }


    const handleGoogleSignIn = ()=>{
        providerLogin(googleProvider)
        .then(result =>{
            const user = result.user
            navigate(from, {replace: true})
            console.log(user)
        }).catch(error =>console.error(error))
}

    return (
        <div className='container w-50'>
            <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter email" required/>
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' placeholder="Password" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Label>New on site?? <Link to="/signup">Signup</Link></Form.Label>
        
      </Form.Group>
      {/* <Button 
      onClick={handleGoogleSignIn} variant="outline-primary"> Log in with Google</Button> */}

<Button className='mb-2' variant="outlined">Login</Button>  <br/>
      
      <ButtonGroup variant="outlined" aria-label="outlined button group">
  <Button onClick={handleGoogleSignIn} ><GoogleIcon></GoogleIcon></Button>
  <Button onClick={handleGithubSignin}>Git</Button>
 
</ButtonGroup>
      
      
       <br/>
      <Form.Text className='text-danger'>
      {error}
      </Form.Text>
    </Form>
        </div>
    );
};

export default Login;