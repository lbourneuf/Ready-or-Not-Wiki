import React from "react";
import "./Sidearms.css";
const Sidearms = ({ sidearms, setSidearms }) => {
  return (
    <div className="all-sidearms-container">
      {sidearms && sidearms.length ? (
        sidearms.map((sidearm) => {
          return (
            <div key={sidearm.id} className="all-sidearms">
              <a className="item-name" href={`/sidearms/${sidearm.id}`}>
                <h1 className="item-name">{sidearm.name}</h1>
              </a>
              <h3>{sidearm.description}</h3>

              <img className="all-sidearms-img" src={sidearm.image_url} />
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
