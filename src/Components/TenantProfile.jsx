import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../styles/TenatProfile.css";
import { useContext, useState } from "react";

import ContextOrigin from "../Context";
const { Context } = ContextOrigin;

export default function TenantProfile() {
  const navigate = useNavigate();

  return (
    <>
      <Row>
        <Col>
          <Card className="card-profile">
            <Card.Header className="text-start" as="h5">
              Datos de Perfil
            </Card.Header>
            <Card.Body>
              <Form>
                <Row>
                  <Col sm={6}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                      <Form.Label className="text-start text-label">
                        Nombre
                      </Form.Label>
                      <Form.Control type="text" placeholder="Nombre" />
                    </Form.Group>
                  </Col>
                  <Col sm={6}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                      <Form.Label className="text-start text-label">
                        Apellido Paterno
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Apellido Paterno"
                      />
                    </Form.Group>
                  </Col>
                  <Col sm={6}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label className="text-start text-label">
                        Email
                      </Form.Label>
                      <Form.Control type="email" placeholder="Email" />
                    </Form.Group>
                  </Col>
                  <Col sm={6}>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label className="text-start text-label">
                        Teléfono
                      </Form.Label>
                      <Form.Control type="text" placeholder="Teléfono" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col sm={6}>
                    <Button className="btn-actualizar" type="submit">
                      Actualizar Datos
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}
