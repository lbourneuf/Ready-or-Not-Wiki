import React from "react";

const Sidearms = ({ sidearms, setSidearms }) => {
  return (
    <div className="all-sidearms-container">
      {sidearms && sidearms.length ? (
        sidearms.map((sidearm) => {
          return (
            <div key={sidearm.id} className="all-sidearms">
              <h1>{sidearm.name}</h1>
              <h3>{sidearm.description}</h3>
              <p>{sidearm.caliber}</p>
              <p>{sidearm.magazine_size}</p>
              <img src={sidearm.image_url} />
            </div>
          );
        })
      ) : (
        <h1>No sidearms to display</h1>
      )}
    </div>
  );
};

export default Sidearms;
