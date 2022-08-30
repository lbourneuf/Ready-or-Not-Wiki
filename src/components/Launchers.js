import React from "react";

const Launchers = ({ launchers, setLaunchers }) => {
  return (
    <div className="all-launchers-container">
      {launchers && launchers.length ? (
        launchers.map((launcher) => {
          return (
            <div key={launcher.id} className="all-launchers">
              <h1>{launcher.name}</h1>
              <h3>{launcher.description}</h3>
              <img src={launcher.image_url} />
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
