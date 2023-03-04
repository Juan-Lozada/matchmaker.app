import React from 'react';
import { Link, useNavigate } from "react-router-dom";

import '../styles/register.css';

import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBRow,
  MDBCol,
  MDBCheckbox
}
  from 'mdb-react-ui-kit';

import { useContext, useState } from "react";

import ContextOrigin from "../Context";
import { Container } from 'react-bootstrap';
import FooterComponent from '../Components/Footer';
const { Context } = ContextOrigin;

export default function Register() {
  const { setUsers, users } = useContext(Context);

  const [user, setUser] = useState({});

  const navigate = useNavigate();
  const addUser = () => {
    setUsers([...users, user]);
    alert("Usuario Creado con éxito, intente iniciar sesión");
    navigate("/login");
  };


  return (
    <>
      <Container>
        <MDBContainer fluid className='register my-5' style={{ borderRadius: '25px' }}>

          <MDBRow className='g-0 align-items-center'>
            <MDBCol col='6'>

              <MDBCard className='my-5 cascading-right' style={{ background: 'hsla(0, 0%, 100%, 0.55)', backdropFilter: 'blur(30px)' }}>
                <MDBCardBody className='p-5 shadow-5 text-center'>

                  <h2 className="fw-bold mb-5">Sign up now</h2>

                  <MDBRow>
                    <MDBCol col='6'>
                      <MDBInput wrapperClass='mb-4' label='First name' id='form1' type='text' />
                    </MDBCol>

                    <MDBCol col='6'>
                      <MDBInput wrapperClass='mb-4' label='Last name' id='form2' type='text' />
                    </MDBCol>
                  </MDBRow>

                  <MDBInput wrapperClass='mb-4' label='Email' id='form3' type='email'
                    onChange={({ target }) => setUser({ ...user, ["email"]: target.value })
                    } />
                  <MDBInput wrapperClass='mb-4' label='Password' id='form4' type='password' onChange={({ target }) => setUser({ ...user, ["password"]: target.value })
                  } />

                  <div className='d-flex justify-content-center mb-4'>
                    <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
                  </div>

                  <MDBBtn className="mb-4 px-5 text-dark" color='dark' size='lg' onClick={addUser}>sign up</MDBBtn>

                </MDBCardBody>
              </MDBCard>
            </MDBCol>

            <MDBCol col='6'>
              <img src="https://halliday-v2.s3.amazonaws.com/uploads/sites/12/2022/11/Glasgow-Green-3-Halliday-Lighting-scaled.jpg" class="rounded-4 shadow-4" style={{ height: '600px', width: '800px' }}
                alt="" fluid />
            </MDBCol>

          </MDBRow>

        </MDBContainer>
      </Container>
      <FooterComponent />
    </>

  );
}
