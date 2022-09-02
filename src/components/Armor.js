import React from "react";

const Armor = ({ armor, setArmor }) => {
  return (
    <div className="all-armor-container">
      {armor && armor.length ? (
        armor.map((item) => {
          return (
            <div key={item.id} className="all-armor">
              <a href={`/armor/${item.id}`}>
                <h1>{item.name}</h1>
              </a>
              <h3>{item.description}</h3>
              <img src={item.image_url} />
            </div>
          );
        })
      ) : (
        <h1>No armor to display</h1>
      )}
    </div>
  );
};

export default Armor;
