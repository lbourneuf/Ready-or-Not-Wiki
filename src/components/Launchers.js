import React from "react";

const Launchers = ({ launchers, setLaunchers }) => {
  return (
    <div className="all-launchers-container">
      {launchers && launchers.length ? (
        launchers.map((launcher) => {
          return (
            <div key={launcher.id} className="all-launchers">
              <a className="item-name" href={`/launchers/${launcher.id}`}>
                <h1 className="item-name">{launcher.name}</h1>
              </a>
              <h3>{launcher.description}</h3>
              <img className="all-launchers-img" src={launcher.image_url} />
            </div>
          );
        })
      ) : (
        <h1> No launchers to display </h1>
      )}
    </div>
  );
};

export default Launchers;
