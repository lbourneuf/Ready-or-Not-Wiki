import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getAssaultRifleById } from "../axios-services";
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
    <div className="all-assaultrifles">
      {indivAssaultRifle && indivAssaultRifle.id ? (
        <div className="indiv-assaultrifle" key={indivAssaultRifle.id}>
          <h1>{indivAssaultRifle.name}</h1>
          <h3>{indivAssaultRifle.description}</h3>
          <p>{indivAssaultRifle.caliber}</p>
          <p>{indivAssaultRifle.magazine_size}</p>
          <img src={indivAssaultRifle.image_url} />

          <Link to="/assaultrifles/" className="backto">
            Back to all assault rifles
          </Link>
        </div>
      ) : (
        <h1>No assault rifle to display</h1>
      )}
    </div>
  );
};

export default IndivAssaultRifle;
