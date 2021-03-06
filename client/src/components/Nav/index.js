import React from "react";
import Auth from "../../utils/auth";

// For mobile nav initialization
const M =window.M;

// Initializes the mobile nav
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {});
  });

function Nav() {

    if (Auth.loggedIn()) {
      return (
        <>
          <div className="navbar-fixed">
          <nav>
            <div className="nav-wrapper orange lighten-1">
              <div className="container">
                <a href="/" className="brand-logo">TheFoodChain</a>
                <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                  <li><a href="/orderHistory"><i className="material-icons left" >history</i>Order History</a></li>
                  <li><a href="/" onClick={() => Auth.logout()}><i className="material-icons left">person_outline</i>Logout</a></li>
                </ul>
              </div>
            </div>
          </nav>
          </div>

          {/* mobile nav */}
          
            <ul className="sidenav" id="mobile-demo">
              <li><a href="/orderHistory"><i className="material-icons left" >history</i>Order History</a></li>
              <li><a href="/" onClick={() => Auth.logout()}><i className="material-icons left">person_outline</i>Logout</a></li>
            </ul>          
          
        </>

      );
    } else {
      return (

        <>
        <div className="navbar-fixed">
          <nav>
            <div className="nav-wrapper orange lighten-1">
              <div className="container">
                <a href="/" className="brand-logo">TheFoodChain</a>
                <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
              
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                  <li><a href="/signup"><i className="material-icons left" >person_add</i>Signup</a></li>
                  <li><a href="/login"><i className="material-icons left">person</i>Login</a></li>
                </ul>
              </div>
            </div>
          </nav>
        </div>

        {/* mobile nav */}

          <ul className="sidenav" id="mobile-demo">
            <li><a href="/signup"><i className="material-icons left" >person_add</i>Signup</a></li>
            <li><a href="/login"><i className="material-icons left">person</i>Login</a></li>
          </ul>

        
      </>

      );
    }

}

export default Nav;