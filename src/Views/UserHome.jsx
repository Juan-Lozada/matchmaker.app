import {provAsidePerfil} from "../Components/ProvAsidePerfil";
import {FooterComponent} from "../Components/Footer";
import {UserDashboard} from "../Components/UserDashboard";

export default function UserHome() {
  return (
    <div id="perfil" className="bg-light vh-100">
      <provAsidePerfil/>
      <UserDashboard />
      <FooterComponent/>
    </div>
  );
}

  