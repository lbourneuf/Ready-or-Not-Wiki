import React from "react";
import "./ArmorMaterial.css";
const ArmorMaterial = ({ armorMaterial, setArmorMaterial }) => {
  return (
    <div className="all-armormaterial-container">
      {armorMaterial && armorMaterial.length ? (
        armorMaterial.map((material) => {
          return (
            <div key={material.id} className="all-armormaterial">
              <a className="item-name" href={`/armormaterial/${material.id}`}>
                <h1 className="item-name">{material.name}</h1>
              </a>
              <h3>{material.description}</h3>
              <img className="material-img" src={material.image_url} />
            </div>
          );
        })
      ) : (
        <h1>No armor material to display</h1>
      )}
    </div>
  );
};

export default ArmorMaterial;
