import React from "react";
import "./LessLethals.css";
const LessLethals = ({ lessLethals, setLessLethals }) => {
  return (
    <div className="all-lesslethals-container">
      {lessLethals && lessLethals.length ? (
        lessLethals.map((lethal) => {
          return (
            <div key={lethal.id} className="all-lesslethals">
              <a className="item-name" href={`/lesslethals/${lethal.id}`}>
                <h1 className="item-name">{lethal.name}</h1>
              </a>
              <h3>{lethal.description}</h3>
              <img className="all-lesslethals-img" src={lethal.image_url} />
            </div>
          );
        })
      ) : (
        <h1>No less lethals to display</h1>
      )}
    </div>
  );
};

export default LessLethals;
