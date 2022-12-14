import React from "react";
import "./AssaultRifles.css";
const AssaultRifles = ({ assaultRifles, setAssaultRifles }) => {
  return (
    <div className="all-rifles-container">
      {assaultRifles && assaultRifles.length ? (
        assaultRifles.map((rifle) => {
          return (
            <div key={rifle.id} className="all-rifles">
              <a className="item-name" href={`/assaultrifles/${rifle.id}`}>
                <h1 className="item-name">{rifle.name}</h1>
              </a>
              <h3>{rifle.description}</h3>

              <img className="rifle-img" src={rifle.image_url} />
            </div>
          );
        })
      ) : (
        <h1>No rifles to display</h1>
      )}
    </div>
  );
};

export default AssaultRifles;
