import React from "react";

const Tacticals = ({ tacticals, setTacticals }) => {
  return (
    <div className="all-tacticals-container">
      {tacticals && tacticals.length ? (
        tacticals.map((tactical) => {
          return (
            <div key={tactical.id} className="all-tacticals">
              <a className="item-name" href={`/tacticals/${tactical.id}`}>
                <h1 className="item-name">{tactical.name}</h1>
              </a>
              <h3>{tactical.description}</h3>
              <img className="tacticals-img" src={tactical.image_url} />
            </div>
          );
        })
      ) : (
        <h1>No tacticals to display</h1>
      )}
    </div>
  );
};

export default Tacticals;
