import { 
  Container,
  Button, 
  Form, 
  Card, 
  Row, 
  Col } 
from "react-bootstrap";

import { useContext, useState, useEffect } from "react";
import Api from "../API/Api.jsx";

import ContextOrigin from "../Context";

const { Context } = ContextOrigin;

import '../styles/userdashboard.css';

import Matchmakerlogo from '../img/logoTransparente.png'
import { useParams } from "react-router-dom";



export default function UserDashboard() {

  const { id } = useParams();
  console.log(id)

  useEffect(() => {
    const dataUser = async () => {
        const resp = Api.getUser(id);
        const usuario = await resp;
        console.log(usuario)
    }
    dataUser();
}, [])

  return (
    <>
      <Container className="d-flex">
        <div className="fondo-card d-flex">
          <Card>

            <Row>
              <Col>
                <img src={Matchmakerlogo} />
              </Col>
            </Row>

            <Row>
              <Col>
              <p>Datos de perfil</p>
              </Col>
            </Row>

            <div className="d-flex1">
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicText">
                  <Form.Label className="text-start text-label text-light">
                    Nombre
                  </Form.Label>
                  <Form.Control type="text" placeholder="Nombre" />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicText">
                  <Form.Label className="text-start text-label text-light">
                    Apellido Paterno
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Apellido Paterno"
                  />
                </Form.Group>
              </Col>
            </Row>
            </div>

            <div className="d-flex1">
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="text-start text-label text-light">
                    Email
                  </Form.Label>
                  <Form.Control type="email" placeholder="Email" />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label className="text-start text-label text-light">
                    Teléfono
                  </Form.Label>
                  <Form.Control type="text" placeholder="Teléfono" />
                </Form.Group>
              </Col>
            </Row>
            </div>

            <Row>
              <Col>
                <Button className="btn-actualizar" type="submit">
                  Actualizar Datos
                </Button>
              </Col>
            </Row>

          </Card>
        </div>
      </Container>
    </>
  );
}








// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import Card from "react-bootstrap/Card";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

// import { useContext, useState } from "react";
// import ContextOrigin from "../Context";
// const { Context } = ContextOrigin;


// import '../styles/userdashboard.css';
// import { Container } from "react-bootstrap";

// export default function UserDashboard() {

//   return (
//     <Container className="d-flex p-5 col-8">
//       <Row>
//         <Col >
//           <Card className="card-profile">
//             <Card.Header className="text-start text-light" as="h5">
//               Datos de Perfil
//             </Card.Header>
//             <Card.Body>
//               <Form className="d-flex flex-column justify-content-center">
//                 <Row>
//                   <Col sm={6}>
//                     <Form.Group className="mb-3" controlId="formBasicText">
//                       <Form.Label className="text-start text-label text-light">
//                         Nombre
//                       </Form.Label>
//                       <Form.Control type="text" placeholder="Nombre" />
//                     </Form.Group>
//                   </Col>
//                   <Col sm={6}>
//                     <Form.Group className="mb-3" controlId="formBasicText">
//                       <Form.Label className="text-start text-label text-light">
//                         Apellido Paterno
//                       </Form.Label>
//                       <Form.Control
//                         type="text"
//                         placeholder="Apellido Paterno"
//                       />
//                     </Form.Group>
//                   </Col>
//                   <Col sm={6}>
//                     <Form.Group className="mb-3" controlId="formBasicEmail">
//                       <Form.Label className="text-start text-label text-light">
//                         Email
//                       </Form.Label>
//                       <Form.Control type="email" placeholder="Email" />
//                     </Form.Group>
//                   </Col>
//                   <Col sm={6}>
//                     <Form.Group className="mb-3" controlId="formBasicPassword">
//                       <Form.Label className="text-start text-label text-light">
//                         Teléfono
//                       </Form.Label>
//                       <Form.Control type="text" placeholder="Teléfono" />
//                     </Form.Group>
//                   </Col>
//                 </Row>
//                 <Row>
//                   <Col sm={12} className="d-flex justify-content-center pt-4">
//                     <Button className="btn-actualizar text-light" type="submit">
//                       Actualizar Datos
//                     </Button>
//                   </Col>
//                 </Row>
//               </Form>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   );
// }