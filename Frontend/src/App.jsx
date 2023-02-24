import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css"

import Context from "./Context";

import LandingPage from "./Views/Landingpage"
import Navbar from "./Components/Navbar"
import Login from "./Views/Login"
import Register from "./Views/Register"
import TenantHome from "./Views/TenantHome"
import TenantProfile from "./Views/TenantProfile"
import UserHome from "./Views/UserHome"
import UserProfile from "./Views/UserProfile"
import TenantCanchas from "./Views/Canchas/TenantCanchas"
import UserCanchas from "./Views/Canchas/UserCanchas"
import TenantAgenda from "./Views/Agendas/TenantAgenda"
import UserAgenda from "./Views/Agendas/UserAgenda"
import FooterComponent from "./Components/Footer";

const { Provider } = Context;

function App() {

  return (
    <div className="App">  
      <Provider>
        <BrowserRouter>
          <Navbar />
            <Routes>
              <Route element={<PageLayout/>}>
                <Route path='/' element={<Navigate to="/home" />} />
                <Route path="/home" element={<LandingPage />} />
                <Route path="/login" element={<Login/>} />
                <Route path="/registrarse" element={<Register/>} />

              </Route>
              <Route element={<PageLayoutPrivate/>} >
                <Route path="/TenantHome" element={<TenantHome/>} />
                <Route path="/TenantProfile" element={<TenantProfile/>} />
                <Route path="/UserHome" element={<UserHome/>} />
                <Route path="/UserProfile" element={<UserProfile/>} />
                <Route path="/TenantCanchas" element={<TenantCanchas/>} />
                <Route path="/UserCanchas" element={<UserCanchas/>} />
                <Route path="/TenantAgenda" element={<TenantAgenda/>} />
                <Route path="/UserAgenda" element={<UserAgenda/>} />
              </Route>
            </Routes>
          <FooterComponent/>
        </BrowserRouter>
      </Provider>
    </div>
  )
}

export default App
