// import { Container, InputGroup, Form, Image } from 'react-bootstrap';

import { React, useEffect } from 'react';

import { useNavigate } from "react-router-dom";

import Select from 'react-select';

import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBRow,
  MDBCol,
  MDBInput
}
  from 'mdb-react-ui-kit';

import '../styles/register.css';

import Matchmakerlogo from '../img/logoTransparente.png'

import { useContext, useState } from "react";

import ContextOrigin from "../Context";

import ApiComunas from "../API/comunas.json"
import Footer from '../Components/Footer';
import Api from '../API/Api';

const { Context } = ContextOrigin;

export default function Register() {
  const { setUsers, users } = useContext(Context);
  const [user, setUser] = useState({});
  const [selectedOption, setSelectedOption] = useState(null);
  const [optionsComunas, setOptionsComunas] = useState([]);
  const [rut, setRut] = useState('');
  const [rutRawValue, setRutRawValue] = useState('');
  const navigate = useNavigate();

  const handleRegistro = async () => {
    try {
      const response = await Api.registroUsuario(user);
      if (response.status === 201) {
        alert('Usuario creado con éxito. Inicia sesión para continuar.');
        navigate('/login');
      } else {
        alert('Ha ocurrido un error al crear el usuario. Inténtalo de nuevo más tarde.');
      }
    } catch (error) {
      alert('Ha ocurrido un error al crear el usuario. Inténtalo de nuevo más tarde.');
    }
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
    const { value } = event.target;
    const formattedValue = formatValue(value);
    setUser({ ...user, rut: formattedValue });
    setRutRawValue(value);
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
      <MDBContainer className="d-flex">
        <div className="fondo-card d-flex">

          <MDBCard className="card-img">
            <img
              src="https://halliday-v2.s3.amazonaws.com/uploads/sites/12/2022/11/Glasgow-Green-3-Halliday-Lighting-scaled.jpg"
              alt="Login image"
              className="w-100 img-register"
              style={{ height: '600px', width: '1000px' }}
            />
          </MDBCard>

          <MDBCard>
            <MDBRow>
              <MDBCol>
                <img src={Matchmakerlogo} />
              </MDBCol>
            </MDBRow>

            <MDBRow>
              <MDBCol>
                <p>Registrar una cuenta</p>
              </MDBCol>
            </MDBRow>
            <form>
              <div className="f-form">

                <MDBRow>
                  <MDBCol className="m-form">
                    <MDBInput
                      className="input-login"
                      wrapperClass='mb-2'
                      label='Nombre'
                      id='form1'
                      type='text'
                      size="lg"
                      onChange={({ target }) => setUser({ ...user, ["nombre"]: target.value })}
                    />
                  </MDBCol>
                </MDBRow>

                <MDBRow>
                  <MDBCol>
                    <MDBInput
                      className="input-login"
                      wrapperClass='mb-2'
                      label='Apellido'
                      id='form2'
                      type='text'
                      size="lg"
                      onChange={({ target }) => setUser({ ...user, ["apellido_paterno"]: target.value })}
                    />
                  </MDBCol>
                </MDBRow>

              </div>

              <div className="f-form">
                <MDBRow>
                  <MDBCol>
                    <MDBInput
                      className="input-login"
                      wrapperClass='mb-2'
                      label='Password'
                      id='form3'
                      type='password'
                      size="lg"q
                      minLength="6"
                      onChange={({ target }) => setUser({ ...user, ["password"]: target.value })}
                    />
                  </MDBCol>
                </MDBRow>

                <MDBRow>
                  <MDBCol>
                    <MDBInput
                      className="input-login"
                      wrapperClass='mb-2'
                      label='Correo electrónico'
                      id='form4'
                      type='email'
                      size="lg"
                      onChange={({ target }) => setUser({ ...user, ["email"]: target.value })}
                    />
                  </MDBCol>
                </MDBRow>
              </div>

              <div className="f-form">

                <MDBRow>
                  <MDBCol className="m-form">
                    <MDBInput
                      className="input-login"
                      wrapperClass='mb-2'
                      label='RUT'
                      id='rut'
                      type='text'
                      size="lg"
                      value={rutRawValue}
                      onChange={handleRutChange}
                      placeholder="11111111-1"
                      maxLength={10}
                      pattern="\d{1,2}\.\d{3}\.\d{3}-\d{1,2}"
                      title="El RUT debe tener el siguiente formato: xx.xxx.xxx-x"
                    />
                  </MDBCol>
                </MDBRow>

                <MDBRow>
                  <MDBCol>
                    <MDBInput
                      className="input-login"
                      wrapperClass='mb-2'
                      label='Teléfono'
                      id='form5'
                      type='number'
                      size="lg"
                      onChange={({ target }) => setUser({ ...user, ["telefono"]: target.value })}
                    />
                  </MDBCol>
                </MDBRow>

              </div>

              <div className="f-form">
                <MDBRow>
                  <MDBCol>
                    <MDBInput
                      className="input-login"
                      wrapperClass='mb-2'
                      label='Direccion'
                      id='form6'
                      type='text'
                      size="lg"
                      onChange={({ target }) => setUser({ ...user, ["direccion"]: target.value })}
                    />
                  </MDBCol>
                </MDBRow>

                <MDBRow>
                  <MDBCol>
                    <Select
                      className='pb-2'
                      defaultValue={selectedOption}
                      onChange={() => { setSelectedOption, ({ target }) => setUser({ ...user, ["comuna"]: target.value }) }}
                      options={optionsComunas}
                      isSearchable={false}
                      placeholder='Selecciona tu comuna'
                    />
                  </MDBCol>
                </MDBRow>
              </div>


              <MDBRow>
                <MDBCol>
                  <Select
                    className='pb-2'
                    defaultValue={selectedOption}
                    onChange={() => { setSelectedOption, ({ target }) => setUser({ ...user, ["tipo_user"]: target.value }) }}
                    options={options}
                    isSearchable={false}
                    placeholder='Selecciona un usuario'
                  />
                </MDBCol>
              </MDBRow>
            </form>

            <MDBRow>
              <MDBCol>
                <MDBBtn
                  color='dark'
                  onClick={handleRegistro}>
                  Registrar
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </MDBCard>

        </div>
      </MDBContainer>
      <Footer />
    </>
  );
}










// import { React, useEffect } from 'react';
// import { Link, useNavigate } from "react-router-dom";
// import Select from 'react-select';


// import '../styles/register.css';
// import {
//   MDBBtn,
//   MDBContainer,
//   MDBCard,
//   MDBCardBody,
//   MDBInput,
//   MDBRow,
//   MDBCol
// }
//   from 'mdb-react-ui-kit';

// import { useContext, useState } from "react";

// import ContextOrigin from "../Context";
// import { Container, InputGroup, Form, Image } from 'react-bootstrap';
// import FooterComponent from '../Components/Footer';
// import ApiComunas from "../API/comunas.json"


// const { Context } = ContextOrigin;

// export default function Register() {
//   const { setUsers, users } = useContext(Context);
//   const [user, setUser] = useState({});
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [optionsComunas, setOptionsComunas] = useState([]);
//   const [rut, setRut] = useState('');
//   const [rutRawValue, setRutRawValue] = useState('');

//   const navigate = useNavigate();
//   const addUser = () => {
//     setUsers([...users, user]);
//     alert("Usuario Creado con éxito, intente iniciar sesión");
//     navigate("/login");
//   };

//   const formatValue = (inputValue) => {
//     const inputWithoutDv = inputValue.replace(/[^0-9]/g, '');
//     const dv = inputWithoutDv.slice(-1);
//     const numbers = inputWithoutDv.slice(0, -1);
//     if (!numbers) {
//       return '';
//     }
//     const formattedNumbers = `${numbers.slice(0, 2)}.${numbers.slice(2, 5)}.${numbers.slice(5)}`;
//     return `${formattedNumbers}-${dv}`;
//   };

//   const handleRutChange = (event) => {
//     const inputValue = event.target.value;
//     const formattedValue = formatValue(inputValue);
//     setRut(formattedValue);
//     setRutRawValue(inputValue);
//   };


//   const options = [
//     { value: 'Cliente', label: 'Cliente' },
//     { value: 'Arrendatario', label: 'Arrendatario' }
//   ]

//   useEffect(() => {
//     setOptionsComunas(ApiComunas.comunas.map((comuna) => ({ value: comuna, label: comuna })));
//   }, [ApiComunas]);


//   return (
//     <>
//       <Container className='px-5 mt-0' >
//         <MDBContainer fluid className='register my-5' style={{ borderRadius: '25px' }}>

//           <MDBRow className='justify-content-center mx-5'>
//             <MDBCol>

//               <MDBCard className=' cascading-right pb-5 ' style={{ background: 'hsla(0, 0%, 100%, 0.55)', backdropFilter: 'blur(30px)' }}>
//                 <MDBCardBody className='register-card'>
//                   <MDBRow className='text-center'>
//                     <MDBCol xl={12}>
//                       <h2 className="fw-bold mb-5">Sign up now</h2>

//                       <MDBRow>
//                         <MDBCol md='6'>
//                           <MDBInput
//                             wrapperClass='mb-4'
//                             label='Nombre'
//                             id='form1'
//                             type='text' />
//                         </MDBCol>

//                         <MDBCol md='6'>
//                           <MDBInput
//                             wrapperClass='mb-4'
//                             label='Apellido'
//                             id='form2'
//                             type='text' />
//                         </MDBCol>
//                       </MDBRow>
//                       <MDBRow>
//                         <MDBCol>
//                           <MDBInput md='6'
//                             type="text"
//                             id="rut"
//                             label="RUT"
//                             value={rutRawValue}
//                             onChange={handleRutChange}
//                             placeholder="11111111-1"
//                             maxLength={12}
//                             pattern="\d{1,2}\.\d{3}\.\d{3}-\d{1,2}"
//                             title="El RUT debe tener el siguiente formato: xx.xxx.xxx-x" />
//                         </MDBCol>
//                         <MDBCol>
//                           <MDBInput md='6'
//                             wrapperClass='mb-4'
//                             label='Telefono'
//                             id='form6'
//                             type='text'
//                             onChange={({ target }) => setUser({ ...user, ["password"]: target.value })
//                             } />
//                         </MDBCol>
//                       </MDBRow>
//                       <Select
//                         className='pb-2'
//                         defaultValue={selectedOption}
//                         onChange={setSelectedOption}
//                         options={optionsComunas}
//                         isSearchable={false}
//                         placeholder='Selecciona tu comuna'
//                       />
//                       <MDBRow>

//                         <MDBCol className='pt-3'>
//                           <MDBInput
//                             md='6'
//                             wrapperClass='mb-4'
//                             label='Correo electrónico'
//                             id='form3'
//                             type='email'
//                             onChange={({ target }) => setUser({ ...user, ["email"]: target.value })
//                             } />
//                         </MDBCol>
//                       </MDBRow>

//                       <Select
//                         className='pb-2'
//                         defaultValue={selectedOption}
//                         onChange={setSelectedOption}
//                         options={options}
//                         isSearchable={false}
//                         placeholder='Selecciona un usuario'
//                       />
//                       <MDBBtn className="mt-3 mb-4  " size='lg' onClick={addUser}>sign up</MDBBtn>
//                     </MDBCol>
//                   </MDBRow>


//                 </MDBCardBody>
//               </MDBCard>
//             </MDBCol>

//             <MDBCol col=''>
//               <Image className='register-img rounded-4 shadow-4' src="https://halliday-v2.s3.amazonaws.com/uploads/sites/12/2022/11/Glasgow-Green-3-Halliday-Lighting-scaled.jpg"  style={{ height: '100%', width: '100vh' }}
//                 alt="" fluid />
//             </MDBCol>

//           </MDBRow>

//         </MDBContainer>
//       </Container>

//     </>

//   );
// }