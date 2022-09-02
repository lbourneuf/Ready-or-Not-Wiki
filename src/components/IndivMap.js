import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMapById } from "../axios-services";
import { Link } from "react-router-dom";

const IndivMap = ({ indivMap, setIndivMap }) => {
  const { mapId } = useParams();

  useEffect(() => {
    const fetchMapById = async () => {
      if (!mapId) {
        return;
      }
      try {
        const indivMapData = await getMapById(mapId);
        setIndivMap(indivMapData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMapById();
  }, [mapId]);
  return (
    <div className="all-maps">
      {indivMap && indivMap.id ? (
        <div className="indiv-map" key={indivMap.id}>
          <h1>{indivMap.name}</h1>
          <h3>{indivMap.description}</h3>
          <p>{indivMap.missions_available}</p>
          <img src={indivMap.image_url} />

          <Link to="/maps/" className="backto">
            Back to all maps
          </Link>
        </div>
      ) : (
        <h1>No map to display</h1>
      )}
    </div>
  );
};

export default IndivMap;
