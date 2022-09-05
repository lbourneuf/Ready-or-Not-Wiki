import React from "react";

const Grenades = ({ grenades, setGrenades }) => {
  return (
    <div className="all-grenades-container">
      {grenades && grenades.length ? (
        grenades.map((grenade) => {
          return (
            <div key={grenade.id} className="all-grenades">
              <a className="item-name" href={`/grenades/${grenade.id}`}>
                <h1 className="item-name">{grenade.name} </h1>
              </a>
              <h3>{grenade.description}</h3>
              <img src={grenade.image_url} />
            </div>
          );
        })
      ) : (
        <h1> No grenades to display</h1>
      )}
    </div>
  );
};

export default Grenades;
