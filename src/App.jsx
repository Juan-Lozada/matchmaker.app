import "bootstrap/dist/css/bootstrap.min.css";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import LandingPage from "./Views/Landingpage"

import Context from "./Context";
import Login from "./Views/Login";
import Register from "./Views/Register";
import Canchas from "./Components/Canchas";

const { Provider } = Context;

function App() {
  return (
    <div className="App">
      <Provider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={ <LandingPage/> } />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/canchas" element={<Canchas />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  )
}

export default App
