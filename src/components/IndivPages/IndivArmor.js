import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArmorById } from "../../axios-services";
import { Link } from "react-router-dom";

const IndivArmor = ({ indivArmor, setIndivArmor }) => {
  const { armorId } = useParams();

  useEffect(() => {
    const fetchArmorById = async () => {
      if (!armorId) {
        return;
      }
      try {
        const indivArmorData = await getArmorById(armorId);
        setIndivArmor(indivArmorData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchArmorById();
  }, [armorId]);
  return (
    <div className="indiv-armor-container">
      {indivArmor && indivArmor.id ? (
        <div className="indiv-armor" key={indivArmor.id}>
          <h1>{indivArmor.name}</h1>
          <h3>{indivArmor.description}</h3>
          <img className="indiv-armor-img" src={indivArmor.image_url} />

          <div className="backto-container">
            <Link to="/armor/">
              <button className="backto">Back to all Armor</button>
            </Link>
          </div>
        </div>
      ) : (
        <h1>No armor to display</h1>
      )}
    </div>
  );
};

export default IndivArmor;
