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

function App() {
  const [usuario, setUsuario] = useState(null)

  return (
    <div className="App">
      <Context.Provider value={{ usuario, setUsuario }} >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={ <LandingPage/> } />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </div>
  )
}

export default App
