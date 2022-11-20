import React from 'react'
import { NavLink } from 'react-router-dom'
// import {NavLink} from 'react-router-dom';


const Navbar = () => {
  return (
    <div>
       <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
   <div className='container-fluid'>
    <h5 className='mx-4 text-white'>CRUD APPLICATION</h5>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
            <a className="nav-link" href="/">Home</a>
        </li>
        
        <li className="nav-item">
          <a className="nav-link" href="/contract">Contract</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about">About</a>
        </li>
        
      </ul>
    </div>

    <a className='btn btn-outline-light' href='/users/add'>Add user</a>
   
  </div>
</nav> 
    </div>
  )
}

export default Navbar
