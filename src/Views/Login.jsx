import React from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBInput
}
    from 'mdb-react-ui-kit';

import '../styles/login.css';
import '../styles/pageLayout.css'
import Matchmakerlogo from '../img/Matchmakerlogo.png'

import FooterComponent from "../Components/Footer";

import { Link, useNavigate, NavLink } from 'react-router-dom'
import { useContext, useState } from "react";

import ContextOrigin from "../Context";
import { Container } from 'react-bootstrap';
const { Context } = ContextOrigin;











// import React from 'react';
// import {
//     MDBBtn,
//     MDBContainer,
//     MDBCard,
//     MDBCardBody,
//     MDBCardImage,
//     MDBRow,
//     MDBCol,
//     MDBIcon,
//     MDBInput
// }
//     from 'mdb-react-ui-kit';

// import '../styles/login.css';
// import '../styles/pageLayout.css'
// import Matchmakerlogo from '../img/Matchmakerlogo.png'

// import FooterComponent from "../Components/Footer";

// import { Link, useNavigate, NavLink } from 'react-router-dom'
// import { useContext, useState } from "react";

// import ContextOrigin from "../Context";
// import { Container } from 'react-bootstrap';
// const { Context } = ContextOrigin;

// export default function Login() {
//     const { setSession, users } = useContext(Context);

//     const [user, setUser] = useState({});

//     const navigate = useNavigate();
//     const addUser = () => {
//         const userExists =
//             users.some((u) => u.email == user.email && u.password == user.password) ||
//             true;
//         if (userExists) {
//             setSession(user);
//             alert("Usuario identificado con éxito");
//             navigate("/user/dashboard");
//         } else {
//             alert("Email o contraseña incorrecta");
//         }
//     };
//     return (

//         <Container className='px-5 mt-0' >
//             <MDBContainer className='login px-4 pt-0 justify-content-center' style={{ borderRadius: '25px' }} >

//                 <MDBCard className=' my-2 cascading-left' style={{ background: 'hsla(0, 0%, 100%, 0.55)', backdropFilter: 'blur(30px)', height: '80vh' }}>
//                     <MDBRow className=' g-0'>

//                         <MDBCol  >
//                             <img src="https://w-wa.co.uk/wp-content/uploads/2021/04/Wynne-Williams_associates_landscape_architects_essex_MUGA_design_drone_shot.jpg"
//                                 alt="Login image" className="w-100" style={{ height: '80vh', width: '100%' }} />
//                         </MDBCol>

//                         <MDBCol md='6' >
//                             <MDBCardBody className='d-flex flex-column gap-1' >

//                                 <div className='d-flex flex-column'>
//                                     <img src={Matchmakerlogo} style={{ color: '#ff6219', height: '20vh', padding: '0' }} />
//                                 </div>

//                                 <h5 className="fw-normal my-4 pb-3 " style={{ letterSpacing: '1px' }}>Ingresa a tu cuenta</h5>

//                                 <MDBInput wrapperClass='mb-4' label='Email address' id='loginEmail' type='email' size="lg"
//                                     onChange={({ target }) => setUser({ ...user, ["email"]: target.value })} />

//                                 <MDBInput wrapperClass='mb-4' label='Password' id='loginPasword' type='password' size="lg"
//                                     onChange={({ target }) => setUser({ ...user, ["password"]: target.value })} />

//                                 <MDBBtn color='dark' size='sm' onClick={addUser}>Login</MDBBtn>
//                                 <MDBRow>
//                                     <MDBCol col='6'>
//                                         <a className="small text-muted" href="/recover">Forgot password?</a>
//                                     </MDBCol>
//                                     <MDBCol col='6'>
//                                         <p style={{ color: '#393f81' }}>Don't have an account? <NavLink to="/register" style={{ color: '#393f81' }}>Register here</NavLink></p>
//                                     </MDBCol>
//                                 </MDBRow>
//                                 <div className='d-flex flex-row justify-content-start'>
//                                     <a href="#!" className="small text-muted me-1">Terms of use.</a>
//                                     <a href="#!" className="small text-muted">Privacy policy</a>
//                                 </div>







//                             </MDBCardBody>
//                         </MDBCol>

//                     </MDBRow>
//                 </MDBCard>

//             </MDBContainer>
//             <FooterComponent />
//         </Container>

//     );
// }