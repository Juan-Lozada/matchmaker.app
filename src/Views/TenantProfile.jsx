import {FooterComponent} from "../Components/Footer";
import {ProvAsidePerfil} from "../components/ProvAsidePerfil";
import {TenantProfile} from "../Components/TenantProfile";

export default function TenantHome() {
  return (
    <div id="perfil">
      <ProvAsidePerfil/>
      <TenantProfile/>
      <FooterComponent/>
    </div>
  );
}