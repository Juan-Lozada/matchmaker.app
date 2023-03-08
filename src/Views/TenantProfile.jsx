import {FooterComponent} from "../Components/Footer";
import {provAsidePerfil} from "../components/ProvAsidePerfil";
import {TenantProfile} from "../Components/TenantProfile";

export default function TenantHome() {
  return (
    <div id="perfil">
      <provAsidePerfil/>
      <TenantProfile/>
      <FooterComponent/>
    </div>
  );
}