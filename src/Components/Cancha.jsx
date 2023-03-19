import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import  * as BsIcons from "react-icons/bs";

export default function Cancha({ cancha }) {
  return (
    <Card className="canchas-card d-flex flex-column justify-content-center p-3">
      <Card.Img className="cancha-img" variant="top" src={cancha.img}/>
      <Card.Body>
        <Card.Title>{cancha.nombre}</Card.Title>
        <Card.Text className="fw-bold">{cancha.deporte}</Card.Text>
        <Card.Text>Precio: {cancha.precio} $</Card.Text>
        <Card.Text>Ubicacion:   {cancha.ubicacion}   <BsIcons.BsFillPinMapFill/></Card.Text>
        <Button type="button" className="btn btn-primary bg-light"  data-mdb-ripple-color="dark">Arrendar </Button>
      </Card.Body>
    </Card>
  );
}
