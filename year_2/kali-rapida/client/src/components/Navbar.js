import React, { useState } from "react";
import logo2 from "../images/logo2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navbar = ({ dispCB }) => {
  const [cbVisibility, setCbVisibility] = useState(false);

  const displayCommande = () => {
    setCbVisibility(!cbVisibility);
    let cb = document.getElementById("commande-box");
    if (cbVisibility) cb.className = "cb-hide card";
    else cb.className = "card";
  };

  return (
    <nav>
      <img src={logo2} alt="logo" id="logo" />
      <div className="navlinks-container">
        <ul className="navlinks">
          <li className="navlink link">
            <Link to="/" className="link isActive">
              Pourquoi nous ?
            </Link>
          </li>
          <li className="navlink">
            <Link to="/commandes" className="link">
              Commander
            </Link>
          </li>
        </ul>
        <div className="link" onClick={displayCommande}>
          <FontAwesomeIcon icon={faShoppingCart} className="shoppin-cart" />
          <li className="navlink">Panier</li>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
