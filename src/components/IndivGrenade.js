import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getGrenadeById } from "../axios-services";
import { Link } from "react-router-dom";

const IndivGrenade = ({ indivGrenade, setIndivGrenade }) => {
  const { grenadeId } = useParams();

  useEffect(() => {
    const fetchGrenadeById = async () => {
      if (!grenadeId) {
        return;
      }
      try {
        const indivGrenadeData = await getGrenadeById(grenadeId);
        setIndivGrenade(indivGrenadeData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchGrenadeById();
  }, [grenadeId]);
  return (
    <div className="indiv-grenade-container">
      {indivGrenade && indivGrenade.id ? (
        <div className="indiv-grenade" key={indivGrenade.id}>
          <h1>{indivGrenade.name}</h1>
          <h3>{indivGrenade.description}</h3>
          <img className="indiv-grenade-img" src={indivGrenade.image_url} />

          <Link to="/grenades/" className="backto">
            Back to all grenades
          </Link>
        </div>
      ) : (
        <h1>No grenade to display</h1>
      )}
    </div>
  );
};
export default IndivGrenade;
