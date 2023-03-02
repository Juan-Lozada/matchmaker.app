import React from 'react'
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Carousel1 from '../img/Carousel1.jpg'

import '../styles/header.css';
import Matchmakerlogo from '../img/Matchmakerlogo.png' 

const Header = () => {
  return (
    <div className='background'>
      <div className="intro-logo jumbo-bg align-center" style={{ background: 'hsla(0, 0%, 100%, 0.55)', backdropFilter: 'blur(30px)' }}>
        <img src={Matchmakerlogo} style={{width:'60vh', height:'60vh' }} />
        <h3>Conectate a la comunidad deportiva y haz match en tu cancha favorita.</h3>
        <Container className='d-flex gap-5 justify-content-center'>
          <NavLink to='/Login' style={{ textDecoration: 'none', Color: "#BAD7E9" }} className='col-3' >
            <button type="button" class="btn btn-primary btn-lg btn-block " data-mdb-ripple-color="dark">Login</button>
          </NavLink>
          <NavLink to='/register' style={{ textDecoration: 'none', Color: "#BAD7E9" }} className='col-3' >
            <button type="button" class="btn btn-primary btn-lg btn-block " data-mdb-ripple-color="dark">Register</button>
          </NavLink>
        </Container>
      </div>
    </div>
  )
}

export default Header
