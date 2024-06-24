import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
     <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      
  <Link className="navbar-brand fs-1 fst-italics m-3" to="/" >Foody</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ">
      <li className="nav-item">
        <Link className="nav-link" aria-current="page" to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/login">Login</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/createuser">Signup</Link>
      </li>
      </ul>
       
  </div>
</nav>
    </div>
  )
}
