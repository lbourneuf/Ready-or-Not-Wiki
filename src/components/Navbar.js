import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <nav className="nav-bar">
        <Link to="/">
          <h3 className="site-name">Ready or Not Wiki</h3>
        </Link>
        <div className="nav-link-container">
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/weapons">
            Weapons
          </Link>
          <Link className="nav-link" to="/equipment">
            Equipment
          </Link>
          <Link className="nav-link" to="/maps">
            Maps
          </Link>
          <Link className="nav-link" to="/missions">
            Missions
          </Link>
          <Link className="nav-link" to="/world">
            World
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
