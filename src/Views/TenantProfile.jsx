import FooterComponent from "../Components/Footer";
import SidebarComponent from "../Components/SidebarComponent";
import TenantProfile from "../Components/TenantProfile";

export default function TenantHome() {
  return (
    <div id="perfil" className="bg-light vh-100">
      <SidebarComponent/>
      <TenantProfile/>
      <FooterComponent/>
    </div>
  );
}