import { useState, useEffect } from "react";
import Cancha from "./Cancha";
import SidebarComponent from "../Components/SidebarComponent.jsx";

import '../styles/canchas.css';

export default function CanchasList() {
  const [canchas, setCanchas] = useState([]);

  useEffect(() => {
    fetch("https://api.npoint.io/259dd18e1698198203b3")
      .then((response) => response.json())
      .then((data) => setCanchas(data.Canchas));
  }, []);

  return (
    <>
      <SidebarComponent/>
      <div className="canchas-grid p-5">
        {canchas.map((cancha) => (
          <Cancha key={cancha.id} cancha={cancha} />
        ))}
      </div>
    </>
  );
}
