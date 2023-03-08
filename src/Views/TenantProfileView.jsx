import FooterComponent from "../Components/Footer";
import ProvAsidePerfil from "../components/ProvAsidePerfil.jsx";
import TenantProfile from "../Components/TenantProfile";

export default function TenantProfileView() {
  return (
    <div id="perfil">
      <TenantProfile />
      <ProvAsidePerfil/>
      <FooterComponent/>
    </div>
  );
}