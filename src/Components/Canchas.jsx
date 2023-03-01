import { useContext, useState } from "react";
import ContextOrigin from "../Context";
import Cancha from "./Cancha";
const { Context } = ContextOrigin;

export default function Canchas() {
    const { canchas } = useContext(Context);
    const [deporte, setDeporte] = useState("");
  
    const canchasFiltradas = canchas.filter((p) =>
      p.deporte.toLowerCase().includes(nombre.toLowerCase())
    );
  
    return (
      <div className="p-4">
        <div className="d-flex align-items-center px-2 mb-3">
          Deporte:
          <input
            type="text"
            className="ms-2 form-control"
            onChange={({ target }) => setDeporte(target.value)}
            value={deporte}
          />
        </div>
  
        <div className="canchas">
          {canchasFiltradas.map((p, i) => {
            return <Cancha Cancha={p} key={i} />;
          })}
        </div>
      </div>
    );
  }