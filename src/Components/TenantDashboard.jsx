import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FormCanchas from "./FormCanchas";
import Table from "react-bootstrap/Table";
import "../styles/TenatProfile.css";
import { useContext, useState } from "react";

import ContextOrigin from "../Context";
const { Context } = ContextOrigin;

export default function TenantProfile() {
  const navigate = useNavigate();
 let sinCanchas = true;
//   const cambioEstado = () => {
   
//    sinCanchas = false;
//    console.log(sinCanchas)
   
//   };
  return (
    <>
      <Row>
        {sinCanchas ? (
          <Col sm={12}>
            <Card className="card-mensaje">
              <Card.Body>
                <h3>Bienvenido Usuario</h3>
                <p>
                  No tiene canchas asociadas a tu cuenta. Registra tu cancha
                  aquí.{" "}
                </p>
                <Button
                  className="btn-actualizar"
                 
                >
                  Registrar Cancha
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ) : (
          <Col>
            <FormCanchas />
          </Col>
        )}
      </Row>
    </>
  );
}
