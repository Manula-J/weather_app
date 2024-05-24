import React from 'react';
import { Link } from 'react-router-dom';
import { FaCloud } from 'react-icons/fa';
import './Navbar.css';

function Navbar() {
  return (
    <>
      <nav className='navbar'>
        <div className='header-container'>
          <Link to='/' className='navbar-logo'>
            TracWeather <div className='navbar-logo-icon'><FaCloud /></div>
          </Link>
          <div className='search'>
            <input type='text' placeholder='Search City or Zip Code ' className='search-box' />
            <i class="fas fa-search"></i>
          </div>
          
          <h1>adlf</h1>
        </div>
        <div className='menu-container'>

        </div>
      </nav>
    </>
  )
}

export default Navbar
