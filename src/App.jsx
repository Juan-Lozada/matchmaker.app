import "bootstrap/dist/css/bootstrap.min.css";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import LandingPage from "./Views/Landingpage"

import Context from "./Context";
import Login from "./Views/Login";
import Register from "./Views/Register";

import UserCanchas from "./Components/Canchas";
import TenantProfileView from "./Views/TenantProfileView";
import TenantHome from "./Views/TenantHome";
import UserProfile from "./Views/UserProfile";
import UserHome from "./Views/UserHome";
import FooterComponent from "./Components/Footer";


const { Provider } = Context;

function App() {
  return (
    <div className="App" >
      <Provider>
        <BrowserRouter>
          <Routes>
              <Route index element={<LandingPage />} />
              <Route path="/logout" element={<LandingPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/user/canchas" element={<UserCanchas />} />
              <Route path="/user/profile" element={<UserProfile />} />
              <Route path="/user/dashboard" element={<UserHome />} />
              <Route path="/tenant/profile" element={<TenantProfileView />} />
              <Route path="/tenant/dashboard" element={<TenantHome />} />
          </Routes>
          <FooterComponent/>
        </BrowserRouter>

      </Provider>
    </div>
  )
}

export default App
