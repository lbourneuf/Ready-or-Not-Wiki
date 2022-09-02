import React from "react";

const Shotguns = ({ shotguns, setShotguns }) => {
  return (
    <div className="all-shotguns-container">
      {shotguns && shotguns.length ? (
        shotguns.map((shotgun) => {
          return (
            <div key={shotgun.id} className="all-shotguns">
              <a href={`/shotguns/${shotgun.id}`}>
                <h1>{shotgun.name}</h1>
              </a>
              <h3>{shotgun.description}</h3>
              <p>{shotgun.caliber}</p>
              <p>{shotgun.magazine_size}</p>
              <img src={shotgun.image_url} />
            </div>
          );
        })
      ) : (
        <h1>No shotguns to display</h1>
      )}
    </div>
  );
};

export default Shotguns;
