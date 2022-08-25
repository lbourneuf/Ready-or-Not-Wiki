import React from "react";
const Maps = ({ maps, setMaps }) => {
  return (
    <div className="all-maps-container">
      {maps && maps.length ? (
        maps.map((item) => {
          return (
            <div key={item.id} className="all-maps">
              <h1>{item.name}</h1>
              <h3>{item.description}</h3>
              <p>{item.missions_available}</p>
              <img src={item.image_url} />
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
