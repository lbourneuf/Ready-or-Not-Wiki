import React from "react";

const ArmorMaterial = ({ armorMaterial, setArmorMaterial }) => {
  return (
    <div className="all-armormaterial-container">
      {armorMaterial && armorMaterial.length ? (
        armorMaterial.map((material) => {
          return (
            <div key={material.id} className="all-armormaterial">
              <a href={`/armormaterial/${material.id}`}>
                <h1>{material.name}</h1>
              </a>
              <h3>{material.description}</h3>
              <img src={material.image_url} />
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
