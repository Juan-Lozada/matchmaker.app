
import FooterComponent from "../Components/Footer";
import Header from "../Components/Header";

import '../styles/header.css'


export default function Home() {
  return (
    <div className="header">
      <div className="layout"></div>
      <Header />
      <FooterComponent />
    </div>

  );
}
