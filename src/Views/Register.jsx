  import { React, useEffect } from 'react';
  import { Link, useNavigate } from "react-router-dom";
  import Select from 'react-select';


  import '../styles/register.css';

  import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBRow,
    MDBCol
  }
    from 'mdb-react-ui-kit';

  import { useContext, useState } from "react";

  import ContextOrigin from "../Context";
  import { Container, InputGroup, Form } from 'react-bootstrap';
  import FooterComponent from '../Components/Footer';
  import ApiComunas from "../API/comunas.json"


  const { Context } = ContextOrigin;

  export default function Register() {
    const { setUsers, users } = useContext(Context);
    const [user, setUser] = useState({});
    const [selectedOption, setSelectedOption] = useState(null);
    const [optionsComunas, setOptionsComunas] = useState([]);
    const [rut, setRut] = useState('');
    const [rutRawValue, setRutRawValue] = useState('');

    const navigate = useNavigate();
    const addUser = () => {
      setUsers([...users, user]);
      alert("Usuario Creado con éxito, intente iniciar sesión");
      navigate("/login");
    };

    const formatValue = (inputValue) => {
      const inputWithoutDv = inputValue.replace(/[^0-9]/g, '');
      const dv = inputWithoutDv.slice(-1);
      const numbers = inputWithoutDv.slice(0, -1);
      if (!numbers) {
        return '';
      }
      const formattedNumbers = `${numbers.slice(0, 2)}.${numbers.slice(2, 5)}.${numbers.slice(5)}`;
      return `${formattedNumbers}-${dv}`;
    };

    const handleRutChange = (event) => {
      const inputValue = event.target.value;
      const formattedValue = formatValue(inputValue);
      setRut(formattedValue);
      setRutRawValue(inputValue);
    };


    const options = [
      { value: 'Cliente', label: 'Cliente' },
      { value: 'Arrendatario', label: 'Arrendatario' }
    ]

    useEffect(() => {
      setOptionsComunas(ApiComunas.comunas.map((comuna) => ({ value: comuna, label: comuna })));
    }, [ApiComunas]);


    return (
      <>
        <Container className='px-5 mt-0' >
          <MDBContainer fluid className='register my-2' style={{ borderRadius: '25px' }}>

            <MDBRow className='justify-content-center align-items-center mx-5'>
              <MDBCol col='6'>

                <MDBCard className=' cascading-right ' style={{ background: 'hsla(0, 0%, 100%, 0.55)', backdropFilter: 'blur(30px)' }}>
                  <MDBCardBody className='p-5 shadow-5 text-center'>

                    <h2 className="fw-bold mb-5">Sign up now</h2>

                    <MDBRow>
                      <MDBCol col='6'>
                        <MDBInput
                          wrapperClass='mb-4'
                          label='Nombre'
                          id='form1'
                          type='text' />
                      </MDBCol>

                      <MDBCol col='6'>
                        <MDBInput
                          wrapperClass='mb-4'
                          label='Apellido'
                          id='form2'
                          type='text' />
                      </MDBCol>
                    </MDBRow>
                    <MDBRow>
                      <MDBCol>
                        <MDBInput col='6'
                          type="text"
                          id="rut"
                          label="RUT"
                          value={rutRawValue}
                          onChange={handleRutChange}
                          placeholder="11111111-1"
                          maxLength={12}
                          pattern="\d{1,2}\.\d{3}\.\d{3}-\d{1,2}"
                          title="El RUT debe tener el siguiente formato: xx.xxx.xxx-x" />
                      </MDBCol>
                      <MDBCol>
                        <MDBInput col='6'
                          wrapperClass='mb-4'
                          label='Telefono'
                          id='form6'
                          type='text'
                          onChange={({ target }) => setUser({ ...user, ["password"]: target.value })
                          } />
                      </MDBCol>
                    </MDBRow>
                    <Select
                      className='pb-2'
                      defaultValue={selectedOption}
                      onChange={setSelectedOption}
                      options={optionsComunas}
                      isSearchable={false}
                      placeholder='Selecciona tu comuna'
                    />
                    <MDBRow>

                      <MDBCol>
                        <MDBInput col='6'
                          wrapperClass='mb-4'
                          label='Correo electrónico'
                          id='form3'
                          type='email'
                          onChange={({ target }) => setUser({ ...user, ["email"]: target.value })
                          } />
                      </MDBCol>
                    </MDBRow>

                    <Select
                      className='pb-2'
                      defaultValue={selectedOption}
                      onChange={setSelectedOption}
                      options={options}
                      isSearchable={false}
                      placeholder='Selecciona un usuario'
                    />
                    <MDBBtn className="mb-4 px-5" size='lg' onClick={addUser}>sign up</MDBBtn>

                  </MDBCardBody>
                </MDBCard>
              </MDBCol>

              <MDBCol col='6'>
                <img src="https://halliday-v2.s3.amazonaws.com/uploads/sites/12/2022/11/Glasgow-Green-3-Halliday-Lighting-scaled.jpg" class="rounded-4 shadow-4" style={{ height: '600px', width: '100vh' }}
                  alt="" fluid />
              </MDBCol>

            </MDBRow>

          </MDBContainer>
        </Container>

      </>

    );
  }
