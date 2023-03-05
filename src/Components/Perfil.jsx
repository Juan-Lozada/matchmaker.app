import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { MDBInput } from "mdb-react-ui-kit";

import { useContext, useState } from "react";

import ContextOrigin from "../Context";
const { Context } = ContextOrigin;

export default function PerfilUser() {
  const { setUsers, users, session } = useContext(Context);

  const [user, setUser] = useState({});


  const actInfo = () => {
    setUsers([...users, user]);
    alert("Datos actualizados correctamente!");
    navigate("/user/profile");
  };



  return (
    <div className="bg-light vh-100 pt-5">
      <Form className="w-50 mx-auto border p-3 rounded bg-success text-white ">
        <div>
          <h4>Datos de Perfil</h4>
          <hr />
        </div>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg"
            onChange={({ target }) => setUser({ ...user, ["email"]: target.value })} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Password</Form.Label>
          <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg"
            onChange={({ target }) => setUser({ ...user, ["password"]: target.value })} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Avatar URL</Form.Label>
          <Form.Control
            type="text"
          />
        </Form.Group>

        <Button variant="warning me-3" onClick={actInfo}>
          Actualizar
        </Button>
      </Form>
    </div>
  );
}
