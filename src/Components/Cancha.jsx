import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function Cancha({
  Cancha: { name, deporte, img, price, ubicacion }
}) {
  return (
    <Card className="p-3">
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text className="fw-bold">{deporte}</Card.Text>
        <Card.Text>Precio: {price}</Card.Text>
        <Card.Text>{ubicacion}</Card.Text>
        <Button variant="secondary">♥</Button>
      </Card.Body>
    </Card>
  );
}
