import React, { useState } from "react";
import { Link } from "react-router-dom";
import { EquipmentMenuItems } from "./EquipmentMenuItems";

const EquipmentDropdown = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <div>
      <ul
        onClick={handleClick}
        className={click ? "dropdown-menu clicked" : "dropdown-menu"}
      >
        {EquipmentMenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={item.cName}
                to={item.path}
                onClick={() => setClick(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default EquipmentDropdown;
