import React from "react";
import "./Shotguns.css";
const Shotguns = ({ shotguns, setShotguns }) => {
  return (
    <div className="all-shotguns-container">
      {shotguns && shotguns.length ? (
        shotguns.map((shotgun) => {
          return (
            <div key={shotgun.id} className="all-shotguns">
              <a className="item-name" href={`/shotguns/${shotgun.id}`}>
                <h1 className="item-name">{shotgun.name}</h1>
              </a>
              <h3>{shotgun.description}</h3>

              <img className="all-shotguns-img" src={shotgun.image_url} />
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
