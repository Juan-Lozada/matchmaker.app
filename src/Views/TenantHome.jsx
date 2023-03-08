import FooterComponent from "../Components/Footer";
import ProvAsidePerfil from "../components/ProvAsidePerfil.jsx";
import TenantDashboard from "../Components/TenantDashboard";

export default function TenantHome() {
  return (
    <div id="perfil">
      <ProvAsidePerfil/>
      <TenantDashboard />
      <FooterComponent/>
    </div>
  );
}