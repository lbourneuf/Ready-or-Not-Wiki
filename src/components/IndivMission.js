import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMissionById } from "../axios-services";
import { Link } from "react-router-dom";

const IndivMission = ({ indivMission, setIndivMission }) => {
  const { missionId } = useParams();
  useEffect(() => {
    const fetchMissionById = async () => {
      if (!missionId) {
        return;
      }
      try {
        const indivMissionData = await getMissionById(missionId);
        setIndivMission(indivMissionData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMissionById();
  }, [missionId]);
  return (
    <div className="all-missions">
      {indivMission && indivMission.id ? (
        <div className="indiv-mission" key={indivMission.id}>
          <h1>{indivMission.name}</h1>
          <h3>{indivMission.description}</h3>
          <img src={indivMission.image_url} />

          <Link to="/missions/" className="backto">
            Back to all missions
          </Link>
        </div>
      ) : (
        <h1>No mission to display</h1>
      )}
    </div>
  );
};

export default IndivMission;
