import React from "react";

const AmmoTypes = ({ ammoTypes, setAmmoTypes }) => {
  return (
    <div className="all-ammoTypes-container">
      {ammoTypes && ammoTypes.length ? (
        ammoTypes.map((ammo) => {
          return (
            <div key={ammo.id} className="all-ammoTypes">
              <h1>{ammo.name}</h1>
              <h3>{ammo.description}</h3>
              <img src={ammo.image_url} />
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
