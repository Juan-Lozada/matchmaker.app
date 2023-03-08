import FooterComponent from "../Components/Footer";
import SidebarComponent from "../Components/SidebarComponent";
import TenantProfile from "../Components/TenantProfile";

export default function TenantHome() {
  return (
    <div id="perfil">
      <SidebarComponent/>
      <TenantProfile/>
      <FooterComponent/>
    </div>
  );
}