import React from 'react';
import './header.css';

function Header() {


  return (
    <div className='text'>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active text-light" aria-current="page" href="/">Home</a>

              </li>
            </ul>
            
          </div>
          <div className='d-flex '>
                <button className='btn btn-primary mx-2'>Log-in</button>
                <button className='btn btn-primary mx-2'>sign-up</button>
              </div>
        </div>
      </nav>
      
    </div>
  )
}

export default Header