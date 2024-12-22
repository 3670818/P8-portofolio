import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/">
        <div >
          <h1>Ibrahim Allae</h1>
        </div>
      </NavLink>
      <NavLink to="/">
        <div>Accueil</div>
      </NavLink>
      <NavLink to="/competence">
        <div>Compétences</div>
      </NavLink>
      <NavLink to="/projet">
        <div>Projets</div>
      </NavLink>
      <NavLink to="/about">
        <div>A propos</div>
      </NavLink>
    </nav>
  );
}

export default Navbar;
