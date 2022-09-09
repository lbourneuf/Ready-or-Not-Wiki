import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArmorMaterialById } from "../axios-services";
import { Link } from "react-router-dom";

const IndivArmorMaterial = ({ indivArmorMaterial, setIndivArmorMaterial }) => {
  const { materialId } = useParams();

  useEffect(() => {
    const fetchArmorMaterialById = async () => {
      if (!materialId) {
        return;
      }

      try {
        const indivMaterialData = await getArmorMaterialById(materialId);
        setIndivArmorMaterial(indivMaterialData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchArmorMaterialById();
  }, [materialId]);
  return (
    <div className="indiv-materials-container">
      {indivArmorMaterial && indivArmorMaterial.id ? (
        <div className="indiv-material" key={indivArmorMaterial.id}>
          <h1>{indivArmorMaterial.name}</h1>
          <h3>{indivArmorMaterial.description}</h3>
          <img
            className="indiv-material-img"
            src={indivArmorMaterial.image_url}
          />

          <Link to="/armormaterial/" className="backto">
            Back to all armor material
          </Link>
        </div>
      ) : (
        <h1>No armor material to display</h1>
      )}
    </div>
  );
};

export default IndivArmorMaterial;
