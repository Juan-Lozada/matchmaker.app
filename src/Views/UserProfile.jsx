import {provAsidePerfil} from "../components/ProvAsidePerfil"
import {FooterComponent} from "../Components/Footer";
import {PerfilUser} from "../Components/Perfil";

export default function UserProfile() {

  return (
    <div id="perfil" className="bg-light vh-100">
      <provAsidePerfil />
      <PerfilUser />
      <FooterComponent />
    </div>
  );
}
