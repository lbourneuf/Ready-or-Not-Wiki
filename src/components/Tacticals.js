import React from "react";

const Tacticals = ({ tacticals, setTacticals }) => {
  return (
    <div className="all-tacticals-container">
      {tacticals && tacticals.length ? (
        tacticals.map((tactical) => {
          return (
            <div key={tactical.id} className="all-tacticals">
              <a href={`/tacticals/${tactical.id}`}>
                <h1>{tactical.name}</h1>
              </a>
              <h3>{tactical.description}</h3>
              <img src={tactical.image_url} />
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