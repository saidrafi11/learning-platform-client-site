import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'

const Nav = () => {
    return (
        <div className='shadow p-3 mb-5 bg-white rounded'>
            <nav class="navbar navbar-expand-lg bg-custom-nav">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/"><h1>Quizbuzz</h1></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>


    <div class="collapse navbar-collapse " id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="quiz">Quiz</Link>
        </li>


        <li class="nav-item">
          <Link class="nav-link active" to="statistics">Statistics</Link>
        </li>
         <li class="nav-item">
          <Link class="nav-link active" to="blog">Blog</Link>
        </li>
         <li class="nav-item">
          <Link class="nav-link active" to="description">Description</Link>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
        </div>
    );
};

export default Nav;