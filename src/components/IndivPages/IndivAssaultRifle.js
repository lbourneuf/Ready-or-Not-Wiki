import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getAssaultRifleById } from "../../axios-services";
import { Link } from "react-router-dom";

const IndivAssaultRifle = ({ indivAssaultRifle, setIndivAssaultRifle }) => {
  const { assaultRifleId } = useParams();

  useEffect(() => {
    const fetchAssaultRifleById = async () => {
      if (!assaultRifleId) {
        return;
      }
      try {
        const indivAssaultRifleData = await getAssaultRifleById(assaultRifleId);
        setIndivAssaultRifle(indivAssaultRifleData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAssaultRifleById();
  }, [assaultRifleId]);
  return (
    <div className="indiv-rifles-container">
      {indivAssaultRifle && indivAssaultRifle.id ? (
        <div className="indiv-assaultrifle" key={indivAssaultRifle.id}>
          <h1>{indivAssaultRifle.name}</h1>
          <h3>{indivAssaultRifle.description}</h3>
          <p> Caliber: {indivAssaultRifle.caliber}</p>
          <p>Magazine Size: {indivAssaultRifle.magazine_size}</p>
          <img className="indiv-rifle-img" src={indivAssaultRifle.image_url} />

          <div className="backto-container">
            <Link to="/assaultrifles/">
              <button className="backto">Back to all Assault Rifles</button>
            </Link>
          </div>
        </div>
      ) : (
        <h1>No assault rifle to display</h1>
      )}
    </div>
  );
};

export default IndivAssaultRifle;
