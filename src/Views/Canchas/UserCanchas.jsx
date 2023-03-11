
import CanchasList from "../../Components/Canchas";
import FooterComponent from "../../Components/Footer";
import SidebarComponent from "../../Components/SidebarComponent";

import '../../styles/canchas.css'


export default function UserCanchas() {
  return (
    <>
      <SidebarComponent />
      <div className="mb-5">
        <CanchasList />
        <FooterComponent />
      </div>
    </>
  );
}
