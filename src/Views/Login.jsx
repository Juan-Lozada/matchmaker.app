import React from 'react';
import { NavLink } from 'react-router-dom';
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


    export default function Login() {
    return (
        <MDBContainer>

            <MDBCard className='my-5 cascading-left' style={{background: 'hsla(0, 0%, 100%, 0.55)',  backdropFilter: 'blur(30px)'}}>
                <MDBRow className='g-0'>

                    <MDBCol >
                        <img src="https://w-wa.co.uk/wp-content/uploads/2021/04/Wynne-Williams_associates_landscape_architects_essex_MUGA_design_drone_shot.jpg"
                            alt="Login image" className="w-100" style={{height:'600px', width:'1000px'}} />
                    </MDBCol> 

                    <MDBCol md='6'>
                        <MDBCardBody className='d-flex flex-column'>

                            <div className='d-flex flex-row mt-2'>
                                <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }} />
                                <span className="h1 fw-bold mb-0">Logo</span>
                            </div>

                            <h5 className="fw-normal my-4 pb-3" style={{ letterSpacing: '1px' }}>Sign into your account</h5>

                            <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg" />
                            <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg" />

                            <MDBBtn className="mb-4 px-5" color='dark' size='lg'>Login</MDBBtn>
                            <a className="small text-muted" href="#!">Forgot password?</a>
                            <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>Don't have an account? <NavLink to="/register" style={{ color: '#393f81' }}>Register here</NavLink></p>

                            <div className='d-flex flex-row justify-content-start'>
                                <a href="#!" className="small text-muted me-1">Terms of use.</a>
                                <a href="#!" className="small text-muted">Privacy policy</a>
                            </div>

                        </MDBCardBody>
                    </MDBCol>

                </MDBRow>
            </MDBCard>

        </MDBContainer>
    );
}
