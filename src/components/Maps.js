import React from "react";
import "./Maps.css";
const Maps = ({ maps, setMaps }) => {
  return (
    <div className="all-maps-container">
      {maps && maps.length ? (
        maps.map((item) => {
          return (
            <div key={item.id} className="all-maps">
              <a className="item-name" href={`/maps/${item.id}`}>
                <h1 className="item-name">{item.name}</h1>
              </a>
              <h3>{item.description}</h3>
              <p>Missions available on this map: {item.missions_available}</p>
              <img className="maps-img" src={item.image_url} />
            </div>
          );
        })
      ) : (
        <h1> No maps to display </h1>
      )}
    </div>
  );
};

export default Maps;
