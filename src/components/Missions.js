import React from "react";

const Missions = ({ missions, setMissions }) => {
  return (
    <div className="all-missions-container">
      {missions && missions.length ? (
        missions.map((mission) => {
          return (
            <div key={mission.id} className="all-missions">
              <h1>{mission.name}</h1>
              <h3>{mission.description}</h3>
              <img src={mission.image_url} />
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
