import { NavLink } from 'react-router-dom';

import { Container } from 'react-bootstrap';

import '../styles/footer.css';

import favicon from '../img/favicon.png' 

export default function Footer () {
  return (
    <>
      <Container fluid className='f-container'>
        <div className='f-footer'>
          <NavLink to='/'>
            <img className='f-favicon' src={favicon} />
          </NavLink>
          <p>© MatchMaker APP 2023 Copyright www.matchmaker.com</p>
        </div>
      </Container> 
    </>
  );
};









// import React from 'react'
// import { Container } from 'react-bootstrap'
// import { NavLink } from 'react-router-dom'


// import "../styles/footer.css";

// export default function FooterComponent() {
//     return (
//         <>
//             <footer className="page-footer font-small  pt-2 "   >
//                 <Container className='d-flex flex-column justify-content-center text-light' style={{ color: "#122953" }} >
//                     <div className="container-fluid text-center text-md-left">
//                         <div className="row">
//                             <div className="col-md-12 mt-md-0 mt-3">
//                                 <h5 className="text-uppercase">Match Maker </h5>
//                             </div>

//                             <hr className="clearfix w-100 d-md-none pb-0" />
//                         </div>
//                     </div>
//                     <div className="footer-copyright text-center py-3">© MatchMaker APP 2023 Copyright:
//                         <NavLink to='/' style={{ textDecoration: 'none' }}>
//                             www.matchmaker.com
//                         </NavLink>
//                     </div>
//                 </Container>
//             </footer>
//         </>
//     );
// };
