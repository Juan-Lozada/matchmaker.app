import FooterComponent from "../Components/Footer";
import SidebarComponent from "../Components/SidebarComponent";
import TenantDashboard from "../Components/TenantDashboard";

export default function TenantHome() {
  return (
    <div id="perfil">
      <SidebarComponent/>
      <TenantDashboard />
      <FooterComponent/>
    </div>
  );
}