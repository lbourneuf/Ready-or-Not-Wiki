import React from "react";

const LessLethals = ({ lessLethals, setLessLethals }) => {
  return (
    <div className="all-lesslethals-container">
      {lessLethals && lessLethals.length ? (
        lessLethals.map((lethal) => {
          return (
            <div key={lethal.id} className="all-lesslethals">
              <h1>{lethal.name}</h1>
              <h3>{lethal.description}</h3>
              <img src={lethal.image_url} />
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
