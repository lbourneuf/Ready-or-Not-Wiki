import React from "react";

const AssaultRifles = ({ assaultRifles, setAssaultRifles }) => {
  return (
    <div className="all-rifles-container">
      {assaultRifles && assaultRifles.length ? (
        assaultRifles.map((rifle) => {
          return (
            <div key={rifle.id} className="all-rifles">
              <a href={`/assaultrifles/${rifle.id}`}>
                <h1>{rifle.name}</h1>
              </a>
              <h3>{rifle.description}</h3>
              <p>{rifle.caliber}</p>
              <p>{rifle.magazine_size}</p>
              <img src={rifle.image_url} />
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
