import React from 'react'
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Carousel1 from '../img/Carousel1.jpg'

import '../styles/header.css';
import LandingCarousel from './Carousel';

const Header = () => {
  return (
    <header>
      <div className="intro-logo jumbo-bg align-center" style={{ background: 'hsla(0, 0%, 100%, 0.55)', backdropFilter: 'blur(30px)' }}>
        <h1>MATCHMAKER</h1>
        <h3>Conectate a la comunidad deportiva y haz match en tu cancha favorita.</h3>
        <Container className='d-grid gap-3 col-4 '>
          <NavLink to='/Login' style={{ textDecoration: 'none', Color: "#BAD7E9" }}>
            <button type="button" class="btn btn-outline-secondary btn-rounded d-grid gap-3 p-2 col-12   " data-mdb-ripple-color="dark">Login</button>
          </NavLink>
          <NavLink to='/register' style={{ textDecoration: 'none', Color: "#BAD7E9" }}>
            <button type="button" class="btn btn-outline-secondary btn-rounded d-grid gap-3 p-2 col-12  " data-mdb-ripple-color="dark">Register</button>
          </NavLink>
        </Container>
        <LandingCarousel />
      </div>
    </header>
  )
}

export default Header
