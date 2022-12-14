import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSidearmById } from "../../axios-services";
import { Link } from "react-router-dom";

const IndivSidearm = ({ indivSidearm, setIndivSidearm }) => {
  const { sidearmId } = useParams();

  useEffect(() => {
    const fetchSidearmById = async () => {
      if (!sidearmId) {
        return;
      }

      try {
        const indivSidearmData = await getSidearmById(sidearmId);
        setIndivSidearm(indivSidearmData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchSidearmById();
  }, [sidearmId]);

  return (
    <div className="indiv-sidearm-container">
      {indivSidearm && indivSidearm.id ? (
        <div className="indiv-sidearm" key={indivSidearm.id}>
          <h1>{indivSidearm.name}</h1>
          <h3>{indivSidearm.description}</h3>
          <p> Caliber: {indivSidearm.caliber}</p>
          <p>Magazine Size: {indivSidearm.magazine_size}</p>
          <img className="indiv-sidearm-img" src={indivSidearm.image_url} />

          <div className="backto-container">
            <Link to="/sidearms/">
              <button className="backto">Back to all Sidearms</button>
            </Link>
          </div>
        </div>
      ) : (
        <h1>No sidearm to display</h1>
      )}
    </div>
  );
};

export default IndivSidearm;
