import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getHeadwearBydId } from "../axios-services";
import { Link } from "react-router-dom";

const IndivHeadwear = ({ indivHeadwear, setIndivHeadwear }) => {
  const { headwearId } = useParams();

  useEffect(() => {
    const fetchHeadwearById = async () => {
      if (!headwearId) {
        return;
      }

      try {
        const indivHeadwearData = await getHeadwearBydId(headwearId);
        setIndivHeadwear(indivHeadwearData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchHeadwearById();
  }, [headwearId]);
  return (
    <div className="all-headwear">
      {indivHeadwear && indivHeadwear.id ? (
        <div className="indiv-headwear" key={indivHeadwear.id}>
          <h1>{indivHeadwear.name}</h1>
          <h3>{indivHeadwear.description}</h3>
          <img src={indivHeadwear.image_url} />

          <Link to="/headwear/" className="backto">
            Back to all headwear
          </Link>
        </div>
      ) : (
        <h1>No headwear to display</h1>
      )}
    </div>
  );
};

export default IndivHeadwear;
