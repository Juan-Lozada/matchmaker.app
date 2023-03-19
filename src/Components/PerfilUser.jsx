import {
  Form,
  Button,
  Container
}
  from "react-bootstrap";

import { MDBInput, MDBRow, MDBCol } from "mdb-react-ui-kit";

import { Navigate } from "react-router-dom";

//import PhoneInput from 'react-phone-input-2'
//import 'react-phone-input-2/lib/style.css'

import '../styles/userProfile.css';

import { useContext, useState } from "react";

import ContextOrigin from "../Context";

const { Context } = ContextOrigin;

export default function PerfilUser() {
  const { setUsers, users, session } = useContext(Context);

  const [user, setUser] = useState({});


  const actInfo = () => {
    setUsers([...users, user]);
    alert("Datos actualizados correctamente!");
    Navigate("/user/profile");
  };



  return (
    <>
      <Container className="flex-column flex-column" style={{ color: 'white' }}>
        <div className="perfil-card vh-100 pt-5 container-base"  >
          <Form className=" perfil-form w-50 mx-auto border bg-light p-3 rounded text-dark form-base" >
            <div >
              <h4>Datos de Perfil</h4>
              <hr />
            </div>
            <Form.Group className=" mb-3 text-dark" controlId="User-Email"  >
              <Form.Label className="text-light">Email address</Form.Label>
              <MDBInput className="text-dark" wrapperClass=' mb-4' label='Correo electronico' id='userEmailInput' type='email' size="lg"
                onChange={({ target }) => setUser({ ...user, ["email"]: target.value })} />
            </Form.Group>
            <Form.Group className="text-dark mb-3" controlId="User-Address">
              <Form.Label className="text-light">Dirección</Form.Label>
              <MDBInput className="text-dark" wrapperClass='mb-4' label='Direccion' id='userAddresInput' type='text' size="lg"
                onChange={({ target }) => setUser({ ...user, ["direccion"]: target.value })} />
            </Form.Group>
            <MDBRow>
              <MDBCol col='6' className="text-dark">
                <Form.Group className="mb-3" controlId="Tenant-Phone" id="userPhoneInput">
                  <Form.Label className="text-light">Numero de telefono</Form.Label>

                </Form.Group>
              </MDBCol>
              <MDBCol col='6'>
                <Form.Group className="text-dark mb-3" controlId="User-Password" >
                  <Form.Label className="text-light" >Password</Form.Label>
                  <MDBInput wrapperClass='mb-4' label='Password' id='userPasswordInput' type='password' size="lg"
                    onChange={({ target }) => setUser({ ...user, ["password"]: target.value })} />
                </Form.Group>
              </MDBCol>
            </MDBRow>
            <MDBRow >
              <MDBCol col="12" className="justify">
                <Button className="btn-actualizar" type="submit" onClick={actInfo}  >
                  Actualizar
                </Button>
              </MDBCol>
            </MDBRow>


          </Form>
        </div>
      </Container>
    </>
  );
}










// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import { MDBCol, MDBInput, MDBRow } from "mdb-react-ui-kit";

// import { Navigate } from "react-router-dom";

// //import PhoneInput from 'react-phone-input-2'
// //import 'react-phone-input-2/lib/style.css'

// import '../styles/userProfile.css';

// import { useContext, useState } from "react";

// import ContextOrigin from "../Context";
// import { Container } from "react-bootstrap";
// const { Context } = ContextOrigin;

// export default function PerfilUser() {
//   const { setUsers, users, session } = useContext(Context);

//   const [user, setUser] = useState({});


//   const actInfo = () => {
//     setUsers([...users, user]);
//     alert("Datos actualizados correctamente!");
//     Navigate("/user/profile");
//   };



//   return (
//     <Container className="flex-column flex-column" style={{color:'white'}}>
//       <div className="vh-100 pt-5 "  >
//         <Form className="form w-50 mx-auto border p-3 rounded text-white " >
//           <div >
//             <h4>Datos de Perfil</h4>
//             <hr />
//           </div>
//           <Form.Group className=" mb-3 text-dark" controlId="User-Email"  >
//             <Form.Label className="text-light"  >Email address</Form.Label>
//             <MDBInput className="text-dark"  wrapperClass=' mb-4' label='Correo electronico' id='userEmailInput' type='email' size="lg"
//               onChange={({ target }) => setUser({ ...user, ["email"]: target.value })} />
//           </Form.Group>
//           <Form.Group className="text-dark mb-3" controlId="User-Address">
//             <Form.Label className="text-light">Dirección</Form.Label>
//             <MDBInput className="text-dark" wrapperClass='mb-4' label='Direccion' id='userAddresInput' type='text' size="lg"
//               onChange={({ target }) => setUser({ ...user, ["direccion"]: target.value })} />
//           </Form.Group>
//           <MDBRow>
//             <MDBCol col='6' className="text-dark">
//               <Form.Group className="mb-3" controlId="Tenant-Phone" id="userPhoneInput">
//                 <Form.Label className="text-light">Numero de telefono</Form.Label>

//               </Form.Group>
//             </MDBCol>
//             <MDBCol col='6'>
//               <Form.Group className="text-dark mb-3" controlId="User-Password" >
//                 <Form.Label className="text-light" >Password</Form.Label>
//                 <MDBInput  wrapperClass='mb-4' label='Password' id='userPasswordInput' type='password' size="lg"
//                   onChange={({ target }) => setUser({ ...user, ["password"]: target.value })} />
//               </Form.Group>
//             </MDBCol>
//           </MDBRow>

//           <Button variant="text-dark me-3" onClick={actInfo} style={{color:'white'}} >
//             Actualizar
//           </Button>
//         </Form>
//       </div>
//     </Container>
//   );
// }