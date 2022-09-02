import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getAmmoTypeById } from "../axios-services";
import { Link } from "react-router-dom";

const IndivAmmoType = ({ indivAmmoType, setIndivAmmoType }) => {
  const { ammoTypeId } = useParams();

  useEffect(() => {
    const fetchAmmoTypeById = async () => {
      if (!ammoTypeId) {
        return;
      }

      try {
        const indivAmmoTypeData = await getAmmoTypeById(ammoTypeId);
        setIndivAmmoType(indivAmmoTypeData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAmmoTypeById();
  }, [ammoTypeId]);
  return (
    <div className="all-ammotypes">
      {indivAmmoType && indivAmmoType.id ? (
        <div className="indiv-ammotype" key={indivAmmoType.id}>
          <h1>{indivAmmoType.name}</h1>
          <h3>{indivAmmoType.description}</h3>
          <img src={indivAmmoType.image_url} />

          <Link to="/ammotypes/" className="backto">
            Back to all ammo types
          </Link>
        </div>
      ) : (
        <h1> No ammo type to display</h1>
      )}
    </div>
  );
};

export default IndivAmmoType;
