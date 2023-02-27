import "bootstrap/dist/css/bootstrap.min.css";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css"
import { useState } from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import LandingPage from "./Views/Landingpage"

import Context from "./Context";
import Login from "./Views/Login";
import Register from "./Views/Register";
import TenantProfileView from "./Views/TenantProfileView";
import TenantHome from "./Views/TenantHome";

function App() {
  const [usuario, setUsuario] = useState(null);
  const [session, setSession] = useState(null);

  return (
    <div className="App">
      <Context.Provider value={{ usuario, setUsuario, session, setSession }} >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={ <LandingPage/> } />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/tenant/profile" element={<TenantProfileView />} />
            <Route path="/tenant/dashboard" element={<TenantHome />} />
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </div>
  )
}

export default App
