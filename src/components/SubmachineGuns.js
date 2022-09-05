import React from "react";

const SubmachineGuns = ({ smgs, setSmgs }) => {
  return (
    <div className="all-smgs-container">
      {smgs && smgs.length ? (
        smgs.map((smg) => {
          return (
            <div key={smg.id} className="all-smgs">
              <a className="item-name" href={`/submachineguns/${smg.id}`}>
                <h1 className="item-name">{smg.name}</h1>
              </a>
              <h3>{smg.description}</h3>
              <p>{smg.caliber}</p>
              <p>{smg.magazine_size}</p>
              <img src={smg.image_url} />
            </div>
          );
        })
      ) : (
        <h1> No SMGS to display</h1>
      )}
    </div>
  );
};

export default SubmachineGuns;
