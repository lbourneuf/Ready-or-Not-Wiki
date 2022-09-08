import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import Dropdown from "./Dropdown";
import EquipmentDropdown from "./EquipmentDropdown";
const Navbar = () => {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(true);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <nav className="nav-bar">
      <Link to="/" className="site-name">
        Ready or Not Wiki
      </Link>

      <div className="menu-icon" onClick={handleClick}>
        <i className={click ? "fas fa-times" : "fas fa-bars"} />
      </div>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li className="nav-item">
          <Link to="/" className="nav-link" onClick={closeMobileMenu}>
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/ammotypes" className="nav-link" onClick={closeMobileMenu}>
            Ammo
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/armor" className="nav-link" onClick={closeMobileMenu}>
            Armor
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/armormaterial"
            className="nav-link"
            onClick={closeMobileMenu}
          >
            Armor Material
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/deployables"
            className="nav-link"
            onClick={closeMobileMenu}
          >
            Deployables
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/headwear" className="nav-link" onClick={closeMobileMenu}>
            Headwear
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/maps" className="nav-link" onClick={closeMobileMenu}>
            Maps
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/missions" className="nav-link" onClick={closeMobileMenu}>
            Missions
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/tacticals" className="nav-link" onClick={closeMobileMenu}>
            Tacticals
          </Link>
        </li>

        <li
          className="nav-item"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <div className="nav-link" onClick={closeMobileMenu}>
            Weapons <i className="fas fa-caret-down" />
          </div>
          {dropdown && <Dropdown />}
        </li>
        <li className="nav-item">
          <Link to="/world" className="nav-link" onClick={closeMobileMenu}>
            World
          </Link>
        </li>
      </ul>
      <Button />
    </nav>
  );
};

export default Navbar;
