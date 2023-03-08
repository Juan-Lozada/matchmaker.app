import FooterComponent from "../Components/Footer";
import SidebarComponent from "../Components/SidebarComponent";
import TenantProfile from "../Components/TenantProfile";

export default function TenantProfileView() {
  return (
    <div id="perfil">
      <SidebarComponent/>
      <ProvAsidePerfil/>
      <FooterComponent/>
    </div>
  );
}