import {FooterComponent} from "../Components/Footer";
import {provAsidePerfil} from "../components/ProvAsidePerfil";
import {TenantDashboard} from "../Components/TenantDashboard";

export default function TenantHome() {
  return (
    <div id="perfil">
      <provAsidePerfil/>
      <TenantDashboard />
      <FooterComponent/>
    </div>
  );
}