import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDeployableById } from "../axios-services";
import { Link } from "react-router-dom";

const IndivDeployable = ({ indivDeployable, setIndivDeployable }) => {
  const { deployableId } = useParams();

  useEffect(() => {
    const fetchDeployableById = async () => {
      if (!deployableId) {
        return;
      }

      try {
        const indivDeployableData = await getDeployableById(deployableId);
        setIndivDeployable(indivDeployableData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchDeployableById();
  }, [deployableId]);
  return (
    <div className="indiv-deployables-container">
      {indivDeployable && indivDeployable.id ? (
        <div className="indiv-deployable" key={indivDeployable.id}>
          <h1>{indivDeployable.name}</h1>
          <h3>{indivDeployable.description}</h3>
          <img className="indiv-deploy-img" src={indivDeployable.image_url} />

          <Link to="/deployables/" className="backto">
            Back to all deployables
          </Link>
        </div>
      ) : (
        <h1>No deployable to display</h1>
      )}
    </div>
  );
};

export default IndivDeployable;
