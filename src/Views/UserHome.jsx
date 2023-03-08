import ProvAsidePerfil from "../Components/ProvAsidePerfil"
import FooterComponent from "../Components/Footer";
import UserDashboard from "../Components/UserDashboard";

export default function UserHome() {
  return (
    <div id="perfil" className="bg-light vh-100">
      <ProvAsidePerfil />
      <UserDashboard />
      <FooterComponent/>
    </div>
  );
}

  