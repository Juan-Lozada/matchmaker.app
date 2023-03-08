import {FooterComponent} from "../Components/Footer";
import {provAsidePerfil} from "../components/ProvAsidePerfil";
import {TenantProfile} from "../Components/TenantProfile";

export default function TenantProfileView() {
  return (
    <div id="perfil">
      <TenantProfile />
      <provAsidePerfil/>
      <FooterComponent/>
    </div>
  );
}