import React from "react";
import "./SubmachineGuns.css";
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

              <img className="smgs-img" src={smg.image_url} />
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
