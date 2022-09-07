import React from "react";
import { Link } from "react-router-dom";
const Weapons = () => {
  return (
    <div className="weapons-container">
      <Link to="/assaultrifles">
        <button className="weapons-btn">Assault Rifles</button>
      </Link>

      <Link to="/submachineguns">
        <button className="weapons-btn">Submachine Guns</button>
      </Link>

      <Link to="/shotguns">
        <button className="weapons-btn">Shotguns</button>
      </Link>

      <Link to="/sidearms">
        <button className="weapons-btn"> Sidearms</button>
      </Link>

      <Link to="/launchers">
        <button className="weapons-btn">Launchers</button>
      </Link>

      <Link to="/lesslethals">
        <button className="weapons-btn">Less Lethals</button>
      </Link>
    </div>
  );
};
export default Weapons;
