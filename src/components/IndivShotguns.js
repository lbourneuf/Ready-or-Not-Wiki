import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getShotgunById } from "../axios-services";
import { Link } from "react-router-dom";

const IndivShotgun = ({ indivShotgun, setIndivShotgun }) => {
  const { shotgunId } = useParams();

  useEffect(() => {
    const fetchShotgunById = async () => {
      if (!shotgunId) {
        return;
      }

      try {
        const indivShotgunData = await getShotgunById(shotgunId);
        setIndivShotgun(indivShotgunData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchShotgunById();
  }, [shotgunId]);
  return (
    <div className="all-shotguns">
      {indivShotgun && indivShotgun.id ? (
        <div className="indiv-shotgun" key={indivShotgun.id}>
          <h1>{indivShotgun.name}</h1>
          <h3>{indivShotgun.description}</h3>
          <p>{indivShotgun.caliber}</p>
          <p>{indivShotgun.magazine_size}</p>
          <img src={indivShotgun.image_url} />

          <Link to="/shotguns/" className="backto">
            Back to all shotguns
          </Link>
        </div>
      ) : (
        <h1>No shotguns to display</h1>
      )}
    </div>
  );
};

export default IndivShotgun;
