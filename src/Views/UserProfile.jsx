import ProvAsidePerfil from "../components//ProvAsidePerfil"
import PerfilUser from "../Components/Perfil";

export default function PerfilView() {
  return (
    <div id="perfil" className="bg-light vh-100">
      <ProvAsidePerfil />
      <PerfilUser />
    </div>
  );
}
