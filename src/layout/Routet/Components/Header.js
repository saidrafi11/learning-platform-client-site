import React, { useContext, useState } from 'react';
import {  Image, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import { AuthContext } from '../../../Firebase/Context/AuthProvider';
import { Button } from '@mui/material';


const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const [state, setState] = useState('false');

const toggler =()=>{
 setState(!state)
}

    console.log(user)
    const handleLogOut = () => {
        logOut()
            .then(() => {

            })
            .catch(error => console.error(error))
    }
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-light">



                <div class="container-fluid">
                    <div class="container">
                        <Link class="navbar-brand" to="/">
                            <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3ws9GcjatdlqRxmv839G7uXcDaDcfyqDt8w&usqp=CAU" alt="" width="30" height="24"></Image>
                            1MS learning
                        </Link>
                    </div>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/">Courses</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="FAQ">FAQ</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="blog">Blog</Link>
                            </li>
                            <li>
                                <Button onClick={toggler} className={'toggle--button'+ (state ? 'toggle--close':'')} >
                                    {state ? 'Dark'  : "Light"}
                                </Button>
                            </li>

                            

                            {
                                user?.uid ?
                                    <>
                                        <li class="nav-item">
                                            <div>
                                                <OverlayTrigger
                                                    placement="bottom"
                                                    overlay={<Tooltip id="button-tooltip-2">{user.displayName}</Tooltip>}
                                                >
                                                    {({ ref, ...triggerHandler }) => (
                                                        <Button
                                                            variant="light"
                                                            {...triggerHandler}
                                                            className="d-inline-flex align-items-center"
                                                        >
                                                            <Image
                                                                ref={ref}
                                                                roundedCircle height={'30px'}
                                                                src={user?.photoURL}
                                                            />

                                                        </Button>
                                                    )}
                                                </OverlayTrigger>
                                                {/* <Image className='userProfile' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3ws9GcjatdlqRxmv839G7uXcDaDcfyqDt8w&usqp=CAU" alt="" width="30" height="24"></Image> */}

                                            </div>
                                        </li>
                                    </>
                                    :
                                    <>

                                    </>
                            }

{
                                user?.uid ?
                                    <>
                                        {/* <Button onClick={handleLogOut}>Logout</Button> */}

                                        <Button size="small" onClick={handleLogOut} variant="outlined" color="error">
                                        Logout
                                        </Button>

                                    </>
                                    :
                                    <>
                                        <li class="nav-item">
                                            <Link class="nav-link" to="signup">Signup</Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link class="nav-link" to="signin">Signin</Link>
                                        </li>
                                    </>
                            }






                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;