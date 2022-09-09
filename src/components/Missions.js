import React from "react";

const Missions = ({ missions, setMissions }) => {
  return (
    <div className="all-missions-container">
      {missions && missions.length ? (
        missions.map((mission) => {
          return (
            <div key={mission.id} className="all-missions">
              <a className="item-name" href={`/missions/${mission.id}`}>
                <h1 className="item-name">{mission.name}</h1>
              </a>
              <h3>{mission.description}</h3>
              <img className="missions-img" src={mission.image_url} />
            </div>
          );
        })
      ) : (
        <h1>No missions to display</h1>
      )}
    </div>
  );
};

export default Missions;
