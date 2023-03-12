import { NavLink } from 'react-router-dom';

import { 
  Container, 
  Row, 
  Col } 
from 'react-bootstrap';

import '../styles/header.css';

import Matchmakerlogo from '../img/logoTransparente.png' 

export default function Header () {
  return (
<<<<<<< HEAD
    <div className='background pt-3'>
      <div className="intro-logo jumbo-bg align-center " style={{ backdropFilter: 'blur(1vh)', height: '100%' }}>
        <Container className='align-center justify-content-center pb-5' style={{ background: 'hsla(0, 0%, 100%, 0.55)',  backdropFilter: 'blur(30px)', borderRadius:'50px'}}>
          <img src={Matchmakerlogo} style={{ width: '60vh', height: '60vh' }} />
          <h3>Conectate a la comunidad deportiva y haz match en tu cancha favorita.</h3>
          <Container className='d-flex gap-5 justify-content-center'>
            <NavLink to='/Login' style={{ textDecoration: 'none', Color: "#BAD7E9" }} className='col-3' >
              <button type="button" className="btn btn-primary btn-lg btn-block " data-mdb-ripple-color="dark">Login</button>
            </NavLink>
            <NavLink to='/register' style={{ textDecoration: 'none', Color: "#BAD7E9" }} className='col-3' >
              <button type="button" className="btn btn-primary btn-lg btn-block " data-mdb-ripple-color="dark">Register</button>
            </NavLink>
          </Container>
        </Container>
=======
    <>
      <div className="h-fondo">
        <Container fluid className='h-container'>
          <div>
            <img src={Matchmakerlogo} />
          </div>
          <p>Conéctate a la comunidad deportiva y haz match en tu cancha favorita.</p>
          <Row className='b-navlink'>
            <Col>
              <NavLink to='/Login' style={{ textDecoration: 'none', Color: "#BAD7E9" }}>
                <button 
                  type="button" 
                  className="btn btn-primary" 
                  data-mdb-ripple-color="dark">
                  Login
                </button>
              </NavLink>
            </Col>
            <Col>
              <NavLink to='/register' style={{ textDecoration: 'none', Color: "#BAD7E9" }}>
                <button 
                  type="button" 
                  className="btn btn-primary" 
                  data-mdb-ripple-color="dark">
                  Register
                </button>
              </NavLink> 
            </Col>
          </Row>     
        </Container> 
>>>>>>> a94ee09a6e08a1ba71cd911311eaa7b1d13509cb
      </div>
    </>
  );
};


<<<<<<< HEAD
export default Header
=======







// import React from 'react'
// import { Container } from 'react-bootstrap';
// import { NavLink } from 'react-router-dom';
// import Carousel1 from '../img/Carousel1.jpg'

// import '../styles/header.css';
// import Matchmakerlogo from '../img/Matchmakerlogo.png'

// const Header = () => {
//   return (
//     <div className='background pt-3'>
//       <div className="intro-logo jumbo-bg align-center " style={{ backdropFilter: 'blur(1vh)', height: '100vh' }}>
//         <Container className='align-center justify-content-center pb-5' style={{ background: 'hsla(0, 0%, 100%, 0.55)',  backdropFilter: 'blur(30px)', borderRadius:'50px'}}>
//           <img src={Matchmakerlogo} style={{ width: '60vh', height: '60vh' }} />
//           <h3>Conectate a la comunidad deportiva y haz match en tu cancha favorita.</h3>
//           <Container className='d-flex gap-5 justify-content-center'>
//             <NavLink to='/Login' style={{ textDecoration: 'none', Color: "#BAD7E9" }} className='col-3' >
//               <button type="button" className="btn btn-primary btn-lg btn-block " data-mdb-ripple-color="dark">Login</button>
//             </NavLink>
//             <NavLink to='/register' style={{ textDecoration: 'none', Color: "#BAD7E9" }} className='col-3' >
//               <button type="button" className="btn btn-primary btn-lg btn-block " data-mdb-ripple-color="dark">Register</button>
//             </NavLink>
//           </Container>
//         </Container>
//       </div>
//     </div>
//   )
// }

// document.body.style.overflow = "hidden"
// export default Header
>>>>>>> a94ee09a6e08a1ba71cd911311eaa7b1d13509cb
