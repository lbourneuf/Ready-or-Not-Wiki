import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getTacticalById } from "../axios-services";
import { Link } from "react-router-dom";

const IndivTactical = ({ indivTactical, setIndivTactical }) => {
  const { tacticalId } = useParams();

  useEffect(() => {
    const fetchTacticalById = async () => {
      if (!tacticalId) {
        return;
      }
      try {
        const indivTacticalData = await getTacticalById(tacticalId);
        setIndivTactical(indivTacticalData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTacticalById();
  }, [tacticalId]);
  return (
    <div className="all-tacticals">
      {indivTactical && indivTactical.id ? (
        <div className="indiv-tactical" key={indivTactical.id}>
          <h1>{indivTactical.name}</h1>
          <h3>{indivTactical.description}</h3>
          <img src={indivTactical.image_url} />

          <Link to="/tacticals/" className="backto">
            Back to all tacticals
          </Link>
        </div>
      ) : (
        <h1>No tactical to display</h1>
      )}
    </div>
  );
};

export default IndivTactical;
