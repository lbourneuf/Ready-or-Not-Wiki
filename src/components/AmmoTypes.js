import React from "react";
import "./AmmoTypes.css";
const AmmoTypes = ({ ammoTypes, setAmmoTypes }) => {
  return (
    <div className="all-ammoTypes-container">
      {ammoTypes && ammoTypes.length ? (
        ammoTypes.map((ammo) => {
          return (
            <div key={ammo.id} className="all-ammoTypes">
              <a className="item-name" href={`/ammotypes/${ammo.id}`}>
                <h1 className="item-name">{ammo.name}</h1>
              </a>
              <h3>{ammo.description}</h3>
              <img className="ammo-img" src={ammo.image_url} />
            </div>
          );
        })
      ) : (
        <h1>No ammo types to display</h1>
      )}
    </div>
  );
};

export default AmmoTypes;
